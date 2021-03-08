import { HttpClient, HttpRequest,HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {

  private baseUrl = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();

    data.append('file', file);

    const newRequest = new HttpRequest('POST', 'http://localhost:8080/savefile', data, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(newRequest);
  }
}