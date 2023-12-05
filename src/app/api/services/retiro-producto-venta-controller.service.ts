/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getVenta } from '../fn/retiro-producto-venta-controller/get-venta';
import { GetVenta$Params } from '../fn/retiro-producto-venta-controller/get-venta';
import { Venta } from '../models/venta';

@Injectable({ providedIn: 'root' })
export class RetiroProductoVentaControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `retiroProductoVentaControllerGetVenta()` */
  static readonly RetiroProductoVentaControllerGetVentaPath = '/retiro-productos/{id}/venta';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVenta()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVenta$Response(params: GetVenta$Params, context?: HttpContext): Observable<StrictHttpResponse<Venta>> {
    return getVenta(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getVenta$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVenta(params: GetVenta$Params, context?: HttpContext): Observable<Venta> {
    return this.getVenta$Response(params, context).pipe(
      map((r: StrictHttpResponse<Venta>): Venta => r.body)
    );
  }

}
