import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http: HttpClient = inject(HttpClient);

  baseApiUrl: string = 'https://icherniakov.ru/yt-course';

  constructor() {}

  getTestAccounts() {
    return this.http.get(`${this.baseApiUrl}/account/test_accounts`);
  }
}
