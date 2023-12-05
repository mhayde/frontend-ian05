/* tslint:disable */
/* eslint-disable */
import { ProductoWithRelations } from '../models/producto-with-relations';

/**
 * (tsType: CategoriaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface CategoriaWithRelations {
  id?: string;
  nombre: string;
  productos?: Array<ProductoWithRelations>;
}
