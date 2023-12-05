import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductoComponent } from './producto/producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { FacturaCompraComponent } from './factura-compra/factura-compra.component';
import { IngresoProductoComponent } from './ingreso-producto/ingreso-producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { VentaComponent } from './venta/venta.component';
import { RetiroProductoComponent } from './retiro-producto/retiro-producto.component';
const routes: Routes = [
  {
    path:'',
    children:[
      {path:'cliente',component:ClienteComponent},
      {path:'producto',component:ProductoComponent},
      {path:'categoria',component:CategoriaComponent},
      {path:'factura-compra',component:FacturaCompraComponent},
      {path:'ingreso-producto',component:IngresoProductoComponent},
      {path:'proveedor',component:ProveedorComponent},
      {path:'venta',component:VentaComponent},
      {path:'retiro-producto',component:RetiroProductoComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
