import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './../interfaces/producto.interface';


@
Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public cargando = true;
  public producto:Producto[];


  constructor(private http : HttpClient ) {
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://portafolio-a42dd.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto[]) => {

      this.producto = resp;
      
      setTimeout(() => {
        this.cargando = false;
      },500);

    });
  } 

  getProducto( id: string ){
    return this.http.get(`https://portafolio-a42dd.firebaseio.com/productos/${ id }.json`);
  }

}
