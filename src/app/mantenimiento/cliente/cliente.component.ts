import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Cliente } from 'src/app/api/models';
import { ClienteControllerService } from 'src/app/api/services';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit{
  
  cliente:Cliente[]=[];
  visible: boolean = false;

  constructor(
    private clienteService:ClienteControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
    ){}

    formCliente: FormGroup = this.fb.group({
      id: [],
      nombre: [],
      telefono:[],
      empresa:[]
    })

  ngOnInit(): void {
    this.clienteService.find().subscribe(data=>this.cliente=data)
  }

  eliminar(id: string): void {
    this.clienteService.deleteById({ id }).subscribe(() => {
      this.cliente = this.cliente.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }
  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  ocultar(): void {
    this.visible = false
    this.formCliente.reset()
  }

  mostrar(data?: Cliente): void {
    if (data?.id) {
      this.formCliente.setValue({ ...data, 'nombre': String(data.nombre) })
    }
    this.visible = true
  }
  guardar(): void {
    if (this.formCliente.value.id) {
      this.clienteService.updateById({ 'id': this.formCliente.value.id, 'body': this.formCliente.value }).subscribe(
        () => {
          this.cliente = this.cliente.map(obj => {
            if (obj.id === this.formCliente.value.id){
              return this.formCliente.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formCliente.reset()
        }
      )
    } else {
      delete this.formCliente.value.id
      this.clienteService.create({ body: this.formCliente.value }).subscribe((datoAgregado) => {
        this.cliente = [...this.cliente, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formCliente.reset()
      })
    }
    this.visible = false
  }
}
