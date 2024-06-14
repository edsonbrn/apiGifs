import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;



  constructor(private gifsSvc: GifsService) { }


  ngOnInit(): void {

  }



  buscar(termino:string) {


    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0) {


      return;

    }

    this.gifsSvc.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
    
  }


  limpiar(){
    
    localStorage.removeItem('historial');
    localStorage.removeItem('resultados');
    location.reload();


  }


}
