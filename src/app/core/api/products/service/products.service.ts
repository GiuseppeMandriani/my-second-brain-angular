import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_URLS } from '../../base/constants/base-api-config.token';
import { BaseApiService } from '../../base/base-api.service';
import { Observable } from 'rxjs';
import { IProductResponse } from '../models/products-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseApiService {

  constructor(
    protected override httpClient: HttpClient,
    @Inject(API_URLS) apiUrls: Record<string, string>
  ) {
    super(httpClient, apiUrls, 'localProducts');
    this.relativeEndpoint = `/local-products`;
  }

  // GET /local-todos
  public getProducts(): Observable<IProductResponse[]> {
    return this._get<IProductResponse[]>(this.relativeEndpoint);
  }
}
