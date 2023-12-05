/* tslint:disable */
/* eslint-disable */
import { FacturaCompraWithRelations } from '../models/factura-compra-with-relations';
import { ProductoWithRelations } from '../models/producto-with-relations';

/**
 * (tsType: ProveedorWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProveedorWithRelations {
  empresa: string;
  facturaCompras?: Array<FacturaCompraWithRelations>;
  id?: string;
  nombre: string;
  productos?: Array<ProductoWithRelations>;
  telefono: string;
}
