/* tslint:disable */
/* eslint-disable */
import { ClienteWithRelations } from '../models/cliente-with-relations';
import { RetiroProductoWithRelations } from '../models/retiro-producto-with-relations';

/**
 * (tsType: VentaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface VentaWithRelations {
  cliente?: ClienteWithRelations;
  clienteId?: string;
  id?: string;
  impuesto: number;
  retiroProductos?: Array<RetiroProductoWithRelations>;
  subtotal: number;
  total: number;
}
