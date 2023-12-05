/* tslint:disable */
/* eslint-disable */
import { IngresoProductoWithRelations } from '../models/ingreso-producto-with-relations';
import { ProveedorWithRelations } from '../models/proveedor-with-relations';

/**
 * (tsType: FacturaCompraWithRelations, schemaOptions: { includeRelations: true })
 */
export interface FacturaCompraWithRelations {
  id?: string;
  impuesto: number;
  ingresoProductos?: Array<IngresoProductoWithRelations>;
  numeroFactura: string;
  proveedor?: ProveedorWithRelations;
  proveedorId?: string;
  subtotal: number;
  total: number;
}
