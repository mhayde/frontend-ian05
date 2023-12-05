/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Producto } from '../../models/producto';

export interface Find$Params {
  id: string;
  filter?: any;
}

export function find(http: HttpClient, rootUrl: string, params: Find$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Producto>>> {
  const rb = new RequestBuilder(rootUrl, find.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.query('filter', params.filter, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Producto>>;
    })
  );
}

find.PATH = '/categorias/{id}/productos';
