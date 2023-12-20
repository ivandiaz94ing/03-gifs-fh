import { Component } from '@angular/core';

import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService : GifsService){
  }

  searchTag(texto:string){
    this.gifsService.searTag(texto);
  }

  public listaSearch : string [] = this.gifsService.tagHistory;

get tags()  {
  return this.gifsService.tagHistory}
}

