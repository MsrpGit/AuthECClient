import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = 'http://localhost:5010/api/'
  constructor(private http: HttpClient) { }

  createUser(formdata: any) {
    return this.http.post(this.baseURL + 'signup', formdata);
  }

  signin(formdata: any) {
    return this.http.post(this.baseURL + 'signin', formdata);
  }
}
/* https://www.npmjs.com/package/ngx-toastr */