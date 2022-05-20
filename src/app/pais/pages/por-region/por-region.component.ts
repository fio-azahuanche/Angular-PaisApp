import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right: 5px;
    margin-bottom:5px;
  }`
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC','EU'];
  regionActiva: string = '';
  paises: Country[] =[];

  constructor( private paisService: PaisService) { }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string){
      this.regionActiva =region;
  }

  buscar(termino:string){

    this.paisService.buscarRegion( termino ).subscribe( (paises) => {
      console.log(paises);

        this.paises = paises;
      })

  }

}
