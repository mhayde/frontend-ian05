/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getProducto } from '../fn/ingreso-producto-producto-controller/get-producto';
import { GetProducto$Params } from '../fn/ingreso-producto-producto-controller/get-producto';
import { Producto } from '../models/producto';

@Injectable({ providedIn: 'root' })
export class IngresoProductoProductoControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `ingresoProductoProductoControllerGetProducto()` */
  static readonly IngresoProductoProductoControllerGetProductoPath = '/ingreso-productos/{id}/producto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProducto()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProducto$Response(params: GetProducto$Params, context?: HttpContext): Observable<StrictHttpResponse<Producto>> {
    return getProducto(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProducto$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProducto(params: GetProducto$Params, context?: HttpContext): Observable<Producto> {
    return this.getProducto$Response(params, context).pipe(
      map((r: StrictHttpResponse<Producto>): Producto => r.body)
    );
  }

}
