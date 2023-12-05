import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Categoria, Producto, Proveedor } from 'src/app/api/models';
import { CategoriaControllerService, ProductoControllerService, ProveedorControllerService } from 'src/app/api/services';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit{
  
  producto:Producto[]=[];
  categoria:Categoria[]=[];
  proveedor:Proveedor[]=[];
  visible: boolean = false;

  constructor(
    private productoService:ProductoControllerService,
    private categoriaService:CategoriaControllerService,
    private proveedorService:ProveedorControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
    ){}

    formProducto: FormGroup = this.fb.group({
      id: [],
      nombre: [],
      categoriaId:[],
      existencia:[],
      precioVenta:[],
      precioCompra:[],
      ubicacion:[],
      proveedorId:[]

    })

  ngOnInit(): void {
    this.productoService.find().subscribe(data=>this.producto=data)
    this.categoriaService.find().subscribe(data=>this.categoria=data)
    this.proveedorService.find().subscribe(data=>this.proveedor=data)

  }

  eliminar(id: string): void {
    this.productoService.deleteById({ id }).subscribe(() => {
      this.producto = this.producto.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }
  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  ocultar(): void {
    this.visible = false
    this.formProducto.reset()
  }

  mostrar(data?: Producto): void {
    if (data?.id) {
      this.formProducto.setValue({ ...data, 'nombre': String(data.nombre) })
    }
    this.visible = true
  }
  guardar(): void {
    if (this.formProducto.value.id) {
      this.productoService.updateById({ 'id': this.formProducto.value.id, 'body': this.formProducto.value }).subscribe(
        () => {
          this.producto = this.producto.map(obj => {
            if (obj.id === this.formProducto.value.id){
              return this.formProducto.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formProducto.reset()
        }
      )
    } else {
      delete this.formProducto.value.id
      this.productoService.create({ body: this.formProducto.value }).subscribe((datoAgregado) => {
        this.producto = [...this.producto, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formProducto.reset()
      })
    }
    this.visible = false
  }
}

