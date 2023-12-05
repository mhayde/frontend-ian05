/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<IngresoProducto, 'id'>, 'productoId'>, schemaOptions: { title: 'NewIngresoProductoInProducto', exclude: [ 'id' ], optional: [ 'productoId' ] })
 */
export interface NewIngresoProductoInProducto {
  cantidad: number;
  facturaCompraId?: string;
  fechaCompra: string;
  productoId?: string;
}
