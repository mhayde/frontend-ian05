/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<FacturaCompra, 'id'>, schemaOptions: { title: 'NewFacturaCompra', exclude: [ 'id' ] })
 */
export interface NewFacturaCompra {
  impuesto: number;
  numeroFactura: string;
  proveedorId?: string;
  subtotal: number;
  total: number;
}
