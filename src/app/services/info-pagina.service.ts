import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
    
  info:InfoPagina ={};
  cargada =false;

  equipo: Array<any>;
  public cargadaEquipo = false;

  constructor(private http : HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }
  private cargarInfo(){
    // Leer Archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp : InfoPagina) => {
        // console.log(resp);
        this.info=resp;
        this.cargada=true;
      });
  }
  private cargarEquipo(){
    // Leer Archivo JSON de FireBase
    this.http.get('https://portafolio-a42dd.firebaseio.com/equipo.json')
      .subscribe((respE : any ) => {
        // console.log(respE);
        this.equipo=respE;
        this.cargadaEquipo=true;
      });
  }
}
