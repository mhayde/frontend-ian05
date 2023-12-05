/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Producto, 'id'>, 'categoriaId'>, schemaOptions: { title: 'NewProductoInCategoria', exclude: [ 'id' ], optional: [ 'categoriaId' ] })
 */
export interface NewProductoInCategoria {
  categoriaId?: string;
  existencia: number;
  nombre: string;
  precioCompra: number;
  precioVenta: number;
  proveedorId?: string;
  ubicacion: string;
}
