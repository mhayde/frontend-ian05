/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Venta, 'id'>, schemaOptions: { title: 'NewVenta', exclude: [ 'id' ] })
 */
export interface NewVenta {
  clienteId?: string;
  impuesto: number;
  subtotal: number;
  total: number;
}
