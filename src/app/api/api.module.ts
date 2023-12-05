/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { CategoriaControllerService } from './services/categoria-controller.service';
import { CategoriaProductoControllerService } from './services/categoria-producto-controller.service';
import { ClienteControllerService } from './services/cliente-controller.service';
import { ClienteVentaControllerService } from './services/cliente-venta-controller.service';
import { FacturaCompraControllerService } from './services/factura-compra-controller.service';
import { FacturaCompraIngresoProductoControllerService } from './services/factura-compra-ingreso-producto-controller.service';
import { FacturaCompraProveedorControllerService } from './services/factura-compra-proveedor-controller.service';
import { IngresoProductoControllerService } from './services/ingreso-producto-controller.service';
import { IngresoProductoFacturaCompraControllerService } from './services/ingreso-producto-factura-compra-controller.service';
import { IngresoProductoProductoControllerService } from './services/ingreso-producto-producto-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { ProductoControllerService } from './services/producto-controller.service';
import { ProductoCategoriaControllerService } from './services/producto-categoria-controller.service';
import { ProductoIngresoProductoControllerService } from './services/producto-ingreso-producto-controller.service';
import { ProductoProveedorControllerService } from './services/producto-proveedor-controller.service';
import { ProductoRetiroProductoControllerService } from './services/producto-retiro-producto-controller.service';
import { ProveedorControllerService } from './services/proveedor-controller.service';
import { ProveedorFacturaCompraControllerService } from './services/proveedor-factura-compra-controller.service';
import { ProveedorProductoControllerService } from './services/proveedor-producto-controller.service';
import { RetiroProductoControllerService } from './services/retiro-producto-controller.service';
import { RetiroProductoProductoControllerService } from './services/retiro-producto-producto-controller.service';
import { RetiroProductoVentaControllerService } from './services/retiro-producto-venta-controller.service';
import { VentaControllerService } from './services/venta-controller.service';
import { VentaClienteControllerService } from './services/venta-cliente-controller.service';
import { VentaRetiroProductoControllerService } from './services/venta-retiro-producto-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    CategoriaControllerService,
    CategoriaProductoControllerService,
    ClienteControllerService,
    ClienteVentaControllerService,
    FacturaCompraControllerService,
    FacturaCompraIngresoProductoControllerService,
    FacturaCompraProveedorControllerService,
    IngresoProductoControllerService,
    IngresoProductoFacturaCompraControllerService,
    IngresoProductoProductoControllerService,
    PingControllerService,
    ProductoControllerService,
    ProductoCategoriaControllerService,
    ProductoIngresoProductoControllerService,
    ProductoProveedorControllerService,
    ProductoRetiroProductoControllerService,
    ProveedorControllerService,
    ProveedorFacturaCompraControllerService,
    ProveedorProductoControllerService,
    RetiroProductoControllerService,
    RetiroProductoProductoControllerService,
    RetiroProductoVentaControllerService,
    VentaControllerService,
    VentaClienteControllerService,
    VentaRetiroProductoControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
