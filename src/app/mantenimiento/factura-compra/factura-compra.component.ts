import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FacturaCompra, Proveedor } from 'src/app/api/models';
import { FacturaCompraControllerService, ProveedorControllerService } from 'src/app/api/services';
@Component({
  selector: 'app-factura-compra',
  templateUrl: './factura-compra.component.html',
  styleUrls: ['./factura-compra.component.css']
})

export class FacturaCompraComponent implements OnInit{
  
  facturaCompra:FacturaCompra[]=[];
  proveedor:Proveedor[]=[];
  visible: boolean = false;

  constructor(
    private facturaCompraService:FacturaCompraControllerService,
    private proveedorService:ProveedorControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
    ){}

    formFacturaCompra: FormGroup = this.fb.group({
      id: [],
      proveedorId: [],
      numeroFactura:[],
      subtotal:[],
      impuesto:[],
      total:[]

    })

  ngOnInit(): void {
    this.facturaCompraService.find().subscribe(data=>this.facturaCompra=data)
    this.proveedorService.find().subscribe(data=>this.proveedor=data)

  }

  eliminar(id: string): void {
    this.facturaCompraService.deleteById({ id }).subscribe(() => {
      this.facturaCompra = this.facturaCompra.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }
  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  ocultar(): void {
    this.visible = false
    this.formFacturaCompra.reset()
  }

  mostrar(data?: FacturaCompra): void {
    if (data?.id) {
      this.formFacturaCompra.setValue({ ...data, 'numeroFactura': String(data.numeroFactura) })
    }
    this.visible = true
  }
  guardar(): void {
    if (this.formFacturaCompra.value.id) {
      this.facturaCompraService.updateById({ 'id': this.formFacturaCompra.value.id, 'body': this.formFacturaCompra.value }).subscribe(
        () => {
          this.facturaCompra = this.facturaCompra.map(obj => {
            if (obj.id === this.formFacturaCompra.value.id){
              return this.formFacturaCompra.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formFacturaCompra.reset()
        }
      )
    } else {
      delete this.formFacturaCompra.value.id
      this.facturaCompraService.create({ body: this.formFacturaCompra.value }).subscribe((datoAgregado) => {
        this.facturaCompra = [...this.facturaCompra, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formFacturaCompra.reset()
      })
    }
    this.visible = false
  }
}

