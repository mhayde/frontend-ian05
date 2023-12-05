/* tslint:disable */
/* eslint-disable */
import { VentaWithRelations } from '../models/venta-with-relations';

/**
 * (tsType: ClienteWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ClienteWithRelations {
  empresa?: string;
  id?: string;
  nombre: string;
  telefono: string;
  ventas?: Array<VentaWithRelations>;
}
