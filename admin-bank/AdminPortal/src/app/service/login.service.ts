import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  sendCredential(username: string, password: string) {
    let url = "http://localhost:8080/index";
    let params = "username=" + username + "&password=" + password;
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
      // 'Access-Control-Allow-Credentials' : true
    });
    let options = {
      responseType: "text" as "json",
      headers: headers,
      withCredentials: true
    };

    return this.http.post(url, params, options);
  }

  logout() {
    let url = "http://localhost:8080/logout";
    let options = {
      responseType: "text" as "json",
      withCredentials: true
    };
    return this.http.get(url, options);
  }
}
