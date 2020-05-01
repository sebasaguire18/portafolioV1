import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from './../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute, public _productosService: ProductosService ) { }

  ngOnInit(): void {
    // lectura de parametros
    this.route.params
        .subscribe( params => {
            console.log(params['termino']);
            this._productosService.buscarProducto(params['termino']);
        });
  }

}
