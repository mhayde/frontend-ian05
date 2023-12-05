/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Producto, 'id'>, 'proveedorId'>, schemaOptions: { title: 'NewProductoInProveedor', exclude: [ 'id' ], optional: [ 'proveedorId' ] })
 */
export interface NewProductoInProveedor {
  categoriaId?: string;
  existencia: number;
  nombre: string;
  precioCompra: number;
  precioVenta: number;
  proveedorId?: string;
  ubicacion: string;
}
