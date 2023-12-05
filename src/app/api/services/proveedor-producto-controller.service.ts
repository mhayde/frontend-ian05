/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { create } from '../fn/proveedor-producto-controller/create';
import { Create$Params } from '../fn/proveedor-producto-controller/create';
import { delete$ } from '../fn/proveedor-producto-controller/delete';
import { Delete$Params } from '../fn/proveedor-producto-controller/delete';
import { find } from '../fn/proveedor-producto-controller/find';
import { Find$Params } from '../fn/proveedor-producto-controller/find';
import { Count as LoopbackCount } from '../models/loopback/count';
import { patch } from '../fn/proveedor-producto-controller/patch';
import { Patch$Params } from '../fn/proveedor-producto-controller/patch';
import { Producto } from '../models/producto';

@Injectable({ providedIn: 'root' })
export class ProveedorProductoControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `proveedorProductoControllerFind()` */
  static readonly ProveedorProductoControllerFindPath = '/proveedors/{id}/productos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params: Find$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Producto>>> {
    return find(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(params: Find$Params, context?: HttpContext): Observable<Array<Producto>> {
    return this.find$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Producto>>): Array<Producto> => r.body)
    );
  }

  /** Path part for operation `proveedorProductoControllerCreate()` */
  static readonly ProveedorProductoControllerCreatePath = '/proveedors/{id}/productos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: Create$Params, context?: HttpContext): Observable<StrictHttpResponse<Producto>> {
    return create(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: Create$Params, context?: HttpContext): Observable<Producto> {
    return this.create$Response(params, context).pipe(
      map((r: StrictHttpResponse<Producto>): Producto => r.body)
    );
  }

  /** Path part for operation `proveedorProductoControllerDelete()` */
  static readonly ProveedorProductoControllerDeletePath = '/proveedors/{id}/productos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: Delete$Params, context?: HttpContext): Observable<StrictHttpResponse<LoopbackCount>> {
    return delete$(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: Delete$Params, context?: HttpContext): Observable<LoopbackCount> {
    return this.delete$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoopbackCount>): LoopbackCount => r.body)
    );
  }

  /** Path part for operation `proveedorProductoControllerPatch()` */
  static readonly ProveedorProductoControllerPatchPath = '/proveedors/{id}/productos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch$Response(params: Patch$Params, context?: HttpContext): Observable<StrictHttpResponse<LoopbackCount>> {
    return patch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch(params: Patch$Params, context?: HttpContext): Observable<LoopbackCount> {
    return this.patch$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoopbackCount>): LoopbackCount => r.body)
    );
  }

}
