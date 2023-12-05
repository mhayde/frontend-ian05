/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<IngresoProducto, 'id'>, 'facturaCompraId'>, schemaOptions: { title: 'NewIngresoProductoInFacturaCompra', exclude: [ 'id' ], optional: [ 'facturaCompraId' ] })
 */
export interface NewIngresoProductoInFacturaCompra {
  cantidad: number;
  facturaCompraId?: string;
  fechaCompra: string;
  productoId?: string;
}
