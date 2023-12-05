/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<IngresoProducto, 'id'>, schemaOptions: { title: 'NewIngresoProducto', exclude: [ 'id' ] })
 */
export interface NewIngresoProducto {
  cantidad: number;
  facturaCompraId?: string;
  fechaCompra: string;
  productoId?: string;
}
