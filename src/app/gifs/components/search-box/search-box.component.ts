import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text"
   class="form-control"
   placeholder="Buscar gifs..."
   (keyup.enter)="searchTag()"
   #txtTagInput
   >
 `
})

//En los inputs tenemos eventos que manejan por ejemplo cuando presionan las teclas
//y tenemos 3 key down que es cuando esta comenzando a presionar la tecla
//keypress que es cuando presiona una tecla y el keyup que es cuando levanta
//luego de presionar la tecla.
//agregando el .enter significa que el evento es para la tecla enter.

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  // ! significa not null operator.

  constructor( private GifsService: GifsService) { }
  //Se debe inyectar el servicio dentro del constructor del la clase SearchBox
  //para poder utilizarlo

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.GifsService.searchTag(newTag);

    //Borrar el valor de el input para que quede en blanco
    //otra vez para poder volver a escribir
    this.tagInput.nativeElement.value = '';

    console.log({ newTag });
  }
}
