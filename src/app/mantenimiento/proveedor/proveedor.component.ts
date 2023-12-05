import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Proveedor } from 'src/app/api/models';
import { ProveedorControllerService } from 'src/app/api/services';
@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})

export class ProveedorComponent implements OnInit{
  
  proveedor:Proveedor[]=[];
  visible: boolean = false;

  constructor(
    private proveedorService:ProveedorControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
    ){}

    formProveedor: FormGroup = this.fb.group({
      id: [],
      nombre: [],
      telefono:[],
      empresa:[]
    })

  ngOnInit(): void {
    this.proveedorService.find().subscribe(data=>this.proveedor=data)
  }

  eliminar(id: string): void {
    this.proveedorService.deleteById({ id }).subscribe(() => {
      this.proveedor = this.proveedor.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }
  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  ocultar(): void {
    this.visible = false
    this.formProveedor.reset()
  }

  mostrar(data?: Proveedor): void {
    if (data?.id) {
      this.formProveedor.setValue({ ...data, 'nombre': String(data.nombre) })
    }
    this.visible = true
  }
  guardar(): void {
    if (this.formProveedor.value.id) {
      this.proveedorService.updateById({ 'id': this.formProveedor.value.id, 'body': this.formProveedor.value }).subscribe(
        () => {
          this.proveedor = this.proveedor.map(obj => {
            if (obj.id === this.formProveedor.value.id){
              return this.formProveedor.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formProveedor.reset()
        }
      )
    } else {
      delete this.formProveedor.value.id
      this.proveedorService.create({ body: this.formProveedor.value }).subscribe((datoAgregado) => {
        this.proveedor = [...this.proveedor, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formProveedor.reset()
      })
    }
    this.visible = false
  }
}
