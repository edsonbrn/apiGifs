import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {


  get resultados(){

    return this.gifsSvc.resultados;



  }




  constructor(private gifsSvc: GifsService){}

  ngOnInit(): void {

  }

}
