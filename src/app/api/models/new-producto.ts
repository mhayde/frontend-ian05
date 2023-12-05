/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Producto, 'id'>, schemaOptions: { title: 'NewProducto', exclude: [ 'id' ] })
 */
export interface NewProducto {
  categoriaId?: string;
  existencia: number;
  nombre: string;
  precioCompra: number;
  precioVenta: number;
  proveedorId?: string;
  ubicacion: string;
}
