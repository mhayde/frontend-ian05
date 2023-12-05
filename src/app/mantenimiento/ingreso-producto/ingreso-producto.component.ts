import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FacturaCompra, Producto,IngresoProducto } from 'src/app/api/models';
import { FacturaCompraControllerService, ProductoControllerService, IngresoProductoControllerService } from 'src/app/api/services';
@Component({
  selector: 'app-ingreso-producto',
  templateUrl: './ingreso-producto.component.html',
  styleUrls: ['./ingreso-producto.component.css']
})

export class IngresoProductoComponent implements OnInit{
  
  ingresoProducto:IngresoProducto[]=[];
  facturaCompra:FacturaCompra[]=[];
  producto:Producto[]=[];
  visible: boolean = false;

  constructor(
    private ingresoProductoService:IngresoProductoControllerService,
    private facturaCompraService:FacturaCompraControllerService,
    private productoService:ProductoControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
    ){}

    formIngresoProducto: FormGroup = this.fb.group({
      id: [],
      facturaCompraId: [],
      productoId:[],
      cantidad:[],
      fechaCompra:[],
    })

  ngOnInit(): void {
    this.facturaCompraService.find().subscribe(data=>this.facturaCompra=data)
    this.productoService.find().subscribe(data=>this.producto=data)
    this.ingresoProductoService.find().subscribe(data=>this.ingresoProducto=data)
  }

  eliminar(id: string): void {
    this.ingresoProductoService.deleteById({ id }).subscribe(() => {
      this.ingresoProducto = this.ingresoProducto.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }
  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  ocultar(): void {
    this.visible = false
    this.formIngresoProducto.reset()
  }

  mostrar(data?: IngresoProducto): void {
    if (data?.id) {
      this.formIngresoProducto.setValue({ ...data, 'facturaCompraId': String(data.facturaCompraId) })
    }
    this.visible = true
  }
  guardar(): void {
    if (this.formIngresoProducto.value.id) {
      this.ingresoProductoService.updateById({ 'id': this.formIngresoProducto.value.id, 'body': this.formIngresoProducto.value }).subscribe(
        () => {
          this.ingresoProducto = this.ingresoProducto.map(obj => {
            if (obj.id === this.formIngresoProducto.value.id){
              return this.formIngresoProducto.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formIngresoProducto.reset()
        }
      )
    } else {
      delete this.formIngresoProducto.value.id
      this.ingresoProductoService.create({ body: this.formIngresoProducto.value }).subscribe((datoAgregado) => {
        this.ingresoProducto = [...this.ingresoProducto, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formIngresoProducto.reset()
      })
    }
    this.visible = false
  }
}

