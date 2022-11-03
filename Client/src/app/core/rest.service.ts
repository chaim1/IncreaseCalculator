import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl = `${environment.increaseCalculatorApi}`;

  constructor(private httpClient: HttpClient) { }

  post<T>(methodName: string, body: any): Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrl}/${methodName}`, body);
  }
}
