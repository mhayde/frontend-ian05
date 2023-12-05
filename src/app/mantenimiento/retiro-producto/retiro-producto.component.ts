import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Venta, Producto,RetiroProducto } from 'src/app/api/models';
import { VentaControllerService, ProductoControllerService, RetiroProductoControllerService } from 'src/app/api/services';
@Component({
  selector: 'app-retiro-producto',
  templateUrl: './retiro-producto.component.html',
  styleUrls: ['./retiro-producto.component.css']
})

export class RetiroProductoComponent implements OnInit{
  
  retiroProducto:RetiroProducto[]=[];
  venta:Venta[]=[];
  producto:Producto[]=[];
  visible: boolean = false;

  constructor(
    private ventaService:VentaControllerService,
    private retiroProductoService:RetiroProductoControllerService,
    private productoService:ProductoControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
    ){}

    formRetiroProducto: FormGroup = this.fb.group({
      id: [],
      ventaId: [],
      productoId:[],
      cantidad:[],
      fechaVenta:[],
    })

  ngOnInit(): void {
    this.ventaService.find().subscribe(data=>this.venta=data)
    this.productoService.find().subscribe(data=>this.producto=data)
    this.retiroProductoService.find().subscribe(data=>this.retiroProducto=data)
  }

  eliminar(id: string): void {
    this.retiroProductoService.deleteById({ id }).subscribe(() => {
      this.retiroProducto = this.retiroProducto.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }
  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  ocultar(): void {
    this.visible = false
    this.formRetiroProducto.reset()
  }

  mostrar(data?: RetiroProducto): void {
    if (data?.id) {
      this.formRetiroProducto.setValue({ ...data, 'ventaId': String(data.ventaId) })
    }
    this.visible = true
  }
  guardar(): void {
    if (this.formRetiroProducto.value.id) {
      this.retiroProductoService.updateById({ 'id': this.formRetiroProducto.value.id, 'body': this.formRetiroProducto.value }).subscribe(
        () => {
          this.retiroProducto = this.retiroProducto.map(obj => {
            if (obj.id === this.formRetiroProducto.value.id){
              return this.formRetiroProducto.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formRetiroProducto.reset()
        }
      )
    } else {
      delete this.formRetiroProducto.value.id
      this.retiroProductoService.create({ body: this.formRetiroProducto.value }).subscribe((datoAgregado) => {
        this.retiroProducto = [...this.retiroProducto, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formRetiroProducto.reset()
      })
    }
    this.visible = false
  }
}

