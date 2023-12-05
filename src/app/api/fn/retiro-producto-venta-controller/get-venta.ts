/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Venta } from '../../models/venta';

export interface GetVenta$Params {
  id: string;
}

export function getVenta(http: HttpClient, rootUrl: string, params: GetVenta$Params, context?: HttpContext): Observable<StrictHttpResponse<Venta>> {
  const rb = new RequestBuilder(rootUrl, getVenta.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Venta>;
    })
  );
}

getVenta.PATH = '/retiro-productos/{id}/venta';
