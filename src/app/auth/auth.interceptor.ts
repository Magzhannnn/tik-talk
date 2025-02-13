import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';

let isRefreshing = false;

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.token;

  if (!token) {
    return next(req);
  }

  if (isRefreshing) {
    return refreshAndProcced(authService, req, next);
  }

  return next(setRequest(req, token)).pipe(
    catchError((error) => {
      if (error.status === 403) {
        return refreshAndProcced(authService, req, next);
      }

      return throwError(error);
    })
  );
};

const refreshAndProcced = (
  authService: AuthService,
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  if (!isRefreshing) {
    isRefreshing = true;

    return authService.refreshAuthToken().pipe(
      switchMap((res: any) => {
        isRefreshing = false;
        return next(setRequest(req, res.access_token));
      })
    );
  }

  return next(setRequest(req, authService.token!));
};

const setRequest = (req: HttpRequest<any>, token: string) => {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
};
