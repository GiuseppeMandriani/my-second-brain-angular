import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BaseApiService } from '../../base/base-api.service';
import { API_URLS } from '../../base/constants/base-api-config.token';
import { Observable } from 'rxjs';
import { ILocalConfigsResponse } from '../models/app-config-response.model';
import { IUpdateAppConfigRequest } from '../models/app-config-request.model';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService extends BaseApiService {

  constructor(
    protected override httpClient: HttpClient,
    @Inject(API_URLS) apiUrls: Record<string, string>
  ) {
    super(httpClient, apiUrls, 'localConfigs');
    this.relativeEndpoint = `/local-configs`;
  }

  // GET /local-configs
  public getLocalConfigs(): Observable<ILocalConfigsResponse> {
    return this._get<ILocalConfigsResponse>(this.relativeEndpoint);
  }

  //PUT /local-configs
  public updateConfig(newConfig: IUpdateAppConfigRequest): Observable<IUpdateAppConfigRequest> {
    return this._put<IUpdateAppConfigRequest>(this.relativeEndpoint, newConfig);
  }
}
