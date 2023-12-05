/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FacturaCompra } from '../../models/factura-compra';

export interface GetFacturaCompra$Params {
  id: string;
}

export function getFacturaCompra(http: HttpClient, rootUrl: string, params: GetFacturaCompra$Params, context?: HttpContext): Observable<StrictHttpResponse<FacturaCompra>> {
  const rb = new RequestBuilder(rootUrl, getFacturaCompra.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FacturaCompra>;
    })
  );
}

getFacturaCompra.PATH = '/ingreso-productos/{id}/factura-compra';
