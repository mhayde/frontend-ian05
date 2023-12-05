/* tslint:disable */
/* eslint-disable */
import { ProductoWithRelations } from '../models/producto-with-relations';
import { VentaWithRelations } from '../models/venta-with-relations';

/**
 * (tsType: RetiroProductoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface RetiroProductoWithRelations {
  cantidad: number;
  fechaVenta: string;
  id?: string;
  producto?: ProductoWithRelations;
  productoId?: string;
  venta?: VentaWithRelations;
  ventaId?: string;
}
