import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from './constants/base-api-config.token';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseApiService {
  protected baseUrl: string;

  constructor(
    protected httpClient: HttpClient,
    @Inject(API_URLS) private apiUrls: Record<string, string>,
    private serviceKey: string
  ) {
    this.baseUrl = this.apiUrls[serviceKey] || '';
  }

  protected _get<T>(endpoint: string, params?: any): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}${endpoint}`, { params });
  }

  protected _post<T>(endpoint: string, body: any, params?: any): Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrl}${endpoint}`, body, { params });
  }

  protected _put<T>(endpoint: string, body: any, params?: any): Observable<T> {
    return this.httpClient.put<T>(`${this.baseUrl}${endpoint}`, body, { params });
  }

  protected _delete<T>(endpoint: string, params?: any): Observable<T> {
    return this.httpClient.delete<T>(`${this.baseUrl}${endpoint}`, { params });
  }
}
