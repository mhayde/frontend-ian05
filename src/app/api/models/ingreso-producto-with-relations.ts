/* tslint:disable */
/* eslint-disable */
import { FacturaCompraWithRelations } from '../models/factura-compra-with-relations';
import { ProductoWithRelations } from '../models/producto-with-relations';

/**
 * (tsType: IngresoProductoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface IngresoProductoWithRelations {
  cantidad: number;
  facturaCompra?: FacturaCompraWithRelations;
  facturaCompraId?: string;
  fechaCompra: string;
  id?: string;
  producto?: ProductoWithRelations;
  productoId?: string;
}
