import { Inject, Injectable } from '@angular/core';
import { BaseApiService } from '../../base/base-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../../base/constants/base-api-config.token';
import { IUserResponse } from '../models/users-response.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseApiService {

  constructor(
    protected override httpClient: HttpClient,
    @Inject(API_URLS) apiUrls: Record<string, string>
  ) {
    super(httpClient, apiUrls, 'users');
    // this.relativeEndPoint = this.baseUrl
  }

  getUsers(): Observable<IUserResponse[]> {
    return this._get<IUserResponse[]>(this.baseUrl);
  }
}
