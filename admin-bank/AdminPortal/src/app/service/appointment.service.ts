import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  getAppointmentList(): Observable<any> {
    let url = "http://localhost:8080/api/appointment/all";
    return this.http.get(url, { withCredentials: true });
  }

  confirmAppointment(id: number): Observable<any> {
    let url = "http://localhost:8080/api/appointment/" + id + "/confirm";
    return this.http.get(url, { withCredentials: true });
  }
}
