import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './../interfaces/producto.interface';


@
Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public cargando = true;
  public producto:Producto[]=[];
  public productoFiltrado:Producto[]=[];


  constructor(private http : HttpClient ) {
    this.cargarProductos();
  }

  private cargarProductos(){
    return new Promise(  ( resolve,reject ) => {
      this.http.get('https://portafolio-a42dd.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        this.producto = resp;
        
        setTimeout(() => {
          this.cargando = false;
        },100);

        resolve();
      });
    });
  } 

  getProducto( id: string ){
    return this.http.get(`https://portafolio-a42dd.firebaseio.com/productos/${ id }.json`);
  }
  buscarProducto( termino: string ){
    if( this.producto.length == 0 ){
      // cargar productos
      this.cargarProductos().then(  ()=> {
        // ejecutar despues de tener los productos
        // aplicar los filtros
        this.filtrarProductos ( termino );
      });
    }else{
      // aplicar filtro
      this.filtrarProductos ( termino );
    }  
  }
  private filtrarProductos (termino: string){
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.producto.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0) {
        this.productoFiltrado.push( prod );
      }
    });
  }
}
