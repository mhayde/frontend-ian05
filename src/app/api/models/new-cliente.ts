/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Cliente, 'id'>, schemaOptions: { title: 'NewCliente', exclude: [ 'id' ] })
 */
export interface NewCliente {
  empresa?: string;
  nombre: string;
  telefono: string;
}
