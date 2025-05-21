import { HttpParams } from "@angular/common/http";

export class BaseApiRequest<T> {
  urlPattern: string;
  pathParams: string[];
  paramsList: string[] = [];
  url: string;
  queryParams: HttpParams = new HttpParams();
  body: T;

  constructor(requestModel: any, urlPattern?: string, nestedKey?: string| null, paramsList?: string[], bodyRawKey?: any, duplicateKeys?: string[]) {
    this.getBody(requestModel, bodyRawKey);
    this.getQueryParams(requestModel, paramsList, duplicateKeys);
    this.getUrl(requestModel, urlPattern, nestedKey, duplicateKeys);
  }


  private getBody(request: any, bodyRawKey = null) {
    if (bodyRawKey) {
      this.body = request[bodyRawKey]
    }
    else this.body = request;
  }

  private getQueryParams(request: any, paramsList?: string[], duplicateKeys?: string[]) {

    if(request){
      for (const paramKey of (paramsList ? paramsList : this.paramsList)) {

        if ((request[paramKey] !== null && request[paramKey] !== undefined) || request[paramKey] === 0) {

          this.queryParams = this.queryParams.set(paramKey, request[paramKey]);
          if(!(duplicateKeys?.includes(paramKey))){
            delete this.body[paramKey]
          }
        }
      }
    }

  }

  private getUrl(request: any, urlPattern?: string, nestedKey?: string | null, duplicateKeys?: string[]) {
    this.pathParams = [];
    this.url = (urlPattern ? urlPattern : this.urlPattern).replace(/\{\{([^\}]*)\}\}/gi, (match, paramKey) => {
      const value: string = request[paramKey] ? request[paramKey] : request[nestedKey!][paramKey];
      if(!(duplicateKeys?.includes(paramKey))){
        delete this.body[paramKey]
      }
      this.pathParams.push(paramKey);
      return value;
    });
  }
}
