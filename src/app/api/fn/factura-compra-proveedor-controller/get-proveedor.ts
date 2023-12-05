/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Proveedor } from '../../models/proveedor';

export interface GetProveedor$Params {
  id: string;
}

export function getProveedor(http: HttpClient, rootUrl: string, params: GetProveedor$Params, context?: HttpContext): Observable<StrictHttpResponse<Proveedor>> {
  const rb = new RequestBuilder(rootUrl, getProveedor.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Proveedor>;
    })
  );
}

getProveedor.PATH = '/factura-compras/{id}/proveedor';
