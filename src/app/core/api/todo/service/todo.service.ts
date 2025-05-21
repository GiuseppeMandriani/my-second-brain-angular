import { Inject, Injectable } from '@angular/core';
import { BaseApiService } from '../../base/base-api.service';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../../base/constants/base-api-config.token';
import { Observable } from 'rxjs';
import { ITodoResponse } from '../models/todo-response.model';
import { IInsertTodoRequest, ITodoByIdRequest } from '../models/todo-request.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends BaseApiService {

  constructor(
    protected override httpClient: HttpClient,
    @Inject(API_URLS) apiUrls: Record<string, string>
  ) {
    super(httpClient, apiUrls, 'localTodo');
    this.relativeEndpoint = `/local-todos`;
  }

  // GET /local-todos
  public getTodo(): Observable<ITodoResponse[]> {
    return this._get<ITodoResponse[]>(this.relativeEndpoint);
  }

  // DELETE /local-todos/{id}
  public deleteTodo(request: ITodoByIdRequest): Observable<ITodoResponse> {
    return this._delete<ITodoResponse>(`${this.relativeEndpoint}/${request.id}`);
  }

  //POST /local-todos
  public addTodo(request: IInsertTodoRequest): Observable<ITodoResponse> {
    return this._post<IInsertTodoRequest>(this.relativeEndpoint, request);
  }

  //PATCH /local-todos/{id}
  public updateTodo(request: ITodoByIdRequest): Observable<any> {
    return this._patch<ITodoByIdRequest>(`${this.relativeEndpoint}/${request.id}`, request);
  }
}
