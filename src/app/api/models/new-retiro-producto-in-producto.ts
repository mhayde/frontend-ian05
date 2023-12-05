/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<RetiroProducto, 'id'>, 'productoId'>, schemaOptions: { title: 'NewRetiroProductoInProducto', exclude: [ 'id' ], optional: [ 'productoId' ] })
 */
export interface NewRetiroProductoInProducto {
  cantidad: number;
  fechaVenta: string;
  productoId?: string;
  ventaId?: string;
}
