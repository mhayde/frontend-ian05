/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<RetiroProducto, 'id'>, 'ventaId'>, schemaOptions: { title: 'NewRetiroProductoInVenta', exclude: [ 'id' ], optional: [ 'ventaId' ] })
 */
export interface NewRetiroProductoInVenta {
  cantidad: number;
  fechaVenta: string;
  productoId?: string;
  ventaId?: string;
}
