import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  sendEmailUrl: string = 'https://g2ij17db5e.execute-api.us-east-1.amazonaws.com/prod';

  constructor(private http: HttpClient) { }

  sendEmail(request: any): Observable<any> {
    return this.http.post(this.sendEmailUrl, request);
  }
}
