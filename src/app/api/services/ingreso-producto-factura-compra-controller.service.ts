/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { FacturaCompra } from '../models/factura-compra';
import { getFacturaCompra } from '../fn/ingreso-producto-factura-compra-controller/get-factura-compra';
import { GetFacturaCompra$Params } from '../fn/ingreso-producto-factura-compra-controller/get-factura-compra';

@Injectable({ providedIn: 'root' })
export class IngresoProductoFacturaCompraControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `ingresoProductoFacturaCompraControllerGetFacturaCompra()` */
  static readonly IngresoProductoFacturaCompraControllerGetFacturaCompraPath = '/ingreso-productos/{id}/factura-compra';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFacturaCompra()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFacturaCompra$Response(params: GetFacturaCompra$Params, context?: HttpContext): Observable<StrictHttpResponse<FacturaCompra>> {
    return getFacturaCompra(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFacturaCompra$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFacturaCompra(params: GetFacturaCompra$Params, context?: HttpContext): Observable<FacturaCompra> {
    return this.getFacturaCompra$Response(params, context).pipe(
      map((r: StrictHttpResponse<FacturaCompra>): FacturaCompra => r.body)
    );
  }

}
