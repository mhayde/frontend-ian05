/* tslint:disable */
/* eslint-disable */
import { CategoriaWithRelations } from '../models/categoria-with-relations';
import { IngresoProductoWithRelations } from '../models/ingreso-producto-with-relations';
import { ProveedorWithRelations } from '../models/proveedor-with-relations';
import { RetiroProductoWithRelations } from '../models/retiro-producto-with-relations';

/**
 * (tsType: ProductoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProductoWithRelations {
  categoria?: CategoriaWithRelations;
  categoriaId?: string;
  existencia: number;
  id?: string;
  ingresoProductos?: Array<IngresoProductoWithRelations>;
  nombre: string;
  precioCompra: number;
  precioVenta: number;
  proveedor?: ProveedorWithRelations;
  proveedorId?: string;
  retiroProductos?: Array<RetiroProductoWithRelations>;
  ubicacion: string;
}
