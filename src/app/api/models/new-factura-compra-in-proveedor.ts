/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<FacturaCompra, 'id'>, 'proveedorId'>, schemaOptions: { title: 'NewFacturaCompraInProveedor', exclude: [ 'id' ], optional: [ 'proveedorId' ] })
 */
export interface NewFacturaCompraInProveedor {
  impuesto: number;
  numeroFactura: string;
  proveedorId?: string;
  subtotal: number;
  total: number;
}
