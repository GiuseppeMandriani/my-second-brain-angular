import { Inject, Injectable } from '@angular/core';
import { BaseApiService } from '../../../core/api/base/base-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../../../core/api/base/constants/base-api-config.token';

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

  getUsers(): Observable<any> {
    return this._get<any>(this.baseUrl);
  }
}
