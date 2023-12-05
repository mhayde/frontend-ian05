/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Venta, 'id'>, 'clienteId'>, schemaOptions: { title: 'NewVentaInCliente', exclude: [ 'id' ], optional: [ 'clienteId' ] })
 */
export interface NewVentaInCliente {
  clienteId?: string;
  impuesto: number;
  subtotal: number;
  total: number;
}
