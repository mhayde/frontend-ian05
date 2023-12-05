import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Venta, Cliente } from 'src/app/api/models';
import { ClienteControllerService, VentaControllerService } from 'src/app/api/services';
@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})

export class VentaComponent implements OnInit{
  
  venta:Venta[]=[];
  cliente:Cliente[]=[];
  visible: boolean = false;

  constructor(
    private ventaService:VentaControllerService,
    private clienteService:ClienteControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
    ){}

    formVenta: FormGroup = this.fb.group({
      id: [],
      clienteId: [],
      subtotal:[],
      impuesto:[],
      total:[]

    })

  ngOnInit(): void {
    this.ventaService.find().subscribe(data=>this.venta=data)
    this.clienteService.find().subscribe(data=>this.cliente=data)

  }

  eliminar(id: string): void {
    this.ventaService.deleteById({ id }).subscribe(() => {
      this.venta = this.venta.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }
  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  ocultar(): void {
    this.visible = false
    this.formVenta.reset()
  }

  mostrar(data?: Venta): void {
    if (data?.id) {
      this.formVenta.setValue({ ...data, 'clienteId': String(data.clienteId) })
    }
    this.visible = true
  }
  guardar(): void {
    if (this.formVenta.value.id) {
      this.ventaService.updateById({ 'id': this.formVenta.value.id, 'body': this.formVenta.value }).subscribe(
        () => {
          this.venta = this.venta.map(obj => {
            if (obj.id === this.formVenta.value.id){
              return this.formVenta.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formVenta.reset()
        }
      )
    } else {
      delete this.formVenta.value.id
      this.ventaService.create({ body: this.formVenta.value }).subscribe((datoAgregado) => {
        this.venta = [...this.venta, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formVenta.reset()
      })
    }
    this.visible = false
  }
}

