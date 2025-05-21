import { Inject, Injectable } from '@angular/core';
import { BaseApiService } from '../../base/base-api.service';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../../base/constants/base-api-config.token';
import { Observable } from 'rxjs';
import { ITodoResponse } from '../models/todo-response.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends BaseApiService {

  constructor(
    protected override httpClient: HttpClient,
    @Inject(API_URLS) apiUrls: Record<string, string>
  ) {
    super(httpClient, apiUrls, 'localTodo');
    // this.relativeEndPoint = this.baseUrl
  }

  getTodo(): Observable<ITodoResponse[]> {
    return this._get<ITodoResponse[]>('/local-todos');
  }
}
