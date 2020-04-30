import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from './../../services/productos.service';
import { ProductoDesc } from './../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent{

  producto:ProductoDesc;
  id:string;

  constructor( private route : ActivatedRoute, private productoService : ProductosService ) { }

  ngOnInit(){
    this.route.params
      .subscribe( parametros => {
        // console.log(parametros['id']);
        
        this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDesc) => {
            this.producto=producto;
            this.id=parametros['id'];
          });
        
      });
  }

}
