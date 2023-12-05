/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Categoria } from '../models/categoria';
import { getCategoria } from '../fn/producto-categoria-controller/get-categoria';
import { GetCategoria$Params } from '../fn/producto-categoria-controller/get-categoria';

@Injectable({ providedIn: 'root' })
export class ProductoCategoriaControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `productoCategoriaControllerGetCategoria()` */
  static readonly ProductoCategoriaControllerGetCategoriaPath = '/productos/{id}/categoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategoria()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoria$Response(params: GetCategoria$Params, context?: HttpContext): Observable<StrictHttpResponse<Categoria>> {
    return getCategoria(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCategoria$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoria(params: GetCategoria$Params, context?: HttpContext): Observable<Categoria> {
    return this.getCategoria$Response(params, context).pipe(
      map((r: StrictHttpResponse<Categoria>): Categoria => r.body)
    );
  }

}
