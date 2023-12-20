import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template:`

  <h5>Buscar:</h5>

  <input type="text"
  class="form-control"
  placeholder="Buscar Gifs...."
  #txtSearch
  (keyup.enter)="searchTag (  ) " >

  `,
})
export class SearchBoxComponent {

  @ViewChild('txtSearch')
  public tag! : ElementRef<HTMLInputElement>;

  constructor(private gifsService : GifsService){}


  searchTag(){
    const texto = this.tag.nativeElement.value;
    this.gifsService.searTag(texto);

    this.tag.nativeElement.value = '';
  }

}
