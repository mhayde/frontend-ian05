/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getProveedor } from '../fn/factura-compra-proveedor-controller/get-proveedor';
import { GetProveedor$Params } from '../fn/factura-compra-proveedor-controller/get-proveedor';
import { Proveedor } from '../models/proveedor';

@Injectable({ providedIn: 'root' })
export class FacturaCompraProveedorControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `facturaCompraProveedorControllerGetProveedor()` */
  static readonly FacturaCompraProveedorControllerGetProveedorPath = '/factura-compras/{id}/proveedor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProveedor()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProveedor$Response(params: GetProveedor$Params, context?: HttpContext): Observable<StrictHttpResponse<Proveedor>> {
    return getProveedor(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProveedor$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProveedor(params: GetProveedor$Params, context?: HttpContext): Observable<Proveedor> {
    return this.getProveedor$Response(params, context).pipe(
      map((r: StrictHttpResponse<Proveedor>): Proveedor => r.body)
    );
  }

}
