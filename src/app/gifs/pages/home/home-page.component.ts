import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  // private gifs: Gif[ ] = [];
  constructor(private gifsService: GifsService){}

  get gifs (){
    return this.gifsService.gifList;
  }

}
