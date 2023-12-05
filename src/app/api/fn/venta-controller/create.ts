/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NewVenta } from '../../models/new-venta';
import { Venta } from '../../models/venta';

export interface Create$Params {
      body?: NewVenta
}

export function create(http: HttpClient, rootUrl: string, params?: Create$Params, context?: HttpContext): Observable<StrictHttpResponse<Venta>> {
  const rb = new RequestBuilder(rootUrl, create.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

create.PATH = '/ventas';
