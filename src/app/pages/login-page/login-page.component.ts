import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { delay, from, map, pipe, skip, take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  standalone: true,
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  isPasswordVisible = signal<boolean>(false);

  form = new FormGroup({
    username: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.getRawValue()).subscribe((res) => {
        this.router.navigate(['']);
      });
    }
  }

  onVisiblePassword() {
    const passwordVisibleStatus = this.isPasswordVisible();
    this.isPasswordVisible.set(!passwordVisibleStatus);
  }

  visiblePassword() {
    return !this.isPasswordVisible();
  }
}
