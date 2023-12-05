/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<RetiroProducto, 'id'>, schemaOptions: { title: 'NewRetiroProducto', exclude: [ 'id' ] })
 */
export interface NewRetiroProducto {
  cantidad: number;
  fechaVenta: string;
  productoId?: string;
  ventaId?: string;
}
