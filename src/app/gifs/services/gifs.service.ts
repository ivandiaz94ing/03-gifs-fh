import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({providedIn: 'root'})
export class GifsService {


  constructor(private http : HttpClient) { }

  public gifList: Gif [ ] = [];

  private _tagHistory: string[]=[];
  private api_keys : string = 'WQ3XAxNGQnU49mkIWEwRmFposNGcLEEO';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  public get tagHistory() : string[] {
    return [...this._tagHistory];
  }

  private organizeTag(tag : string) : void {

    tag = tag.toLocaleLowerCase();

    if(this._tagHistory.includes( tag ) ){
    this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    this._tagHistory = this.tagHistory.splice(0,10);
    }

    this._tagHistory.unshift(tag);
  }

//Peticion HTTP con solo javascript
  // async searTag(texto : string): Promise<void>{
  //   if(texto.length === 0)
  //   return;
  //   this.organizeTag(texto)
  //   fetch('https://api.giphy.com/v1/gifs/search?api_key=WQ3XAxNGQnU49mkIWEwRmFposNGcLEEO&q=vegeta&limit=10')
  //   .then(resp => resp.json())
  //   .then(data => console.log( data ) );
  // }


  searTag(texto : string): void{

    if(texto.length === 0)
    return;

    this.organizeTag(texto);

    const params = new HttpParams()
    .set('api_key', this.api_keys)
    .set('limit', '10')
    .set('q', texto)


    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe(resp => {
      this.gifList = resp.data;
      //console.log({gifs: this.gifList});
    })

    //'https://api.giphy.com/v1/gifs/search?api_key=WQ3XAxNGQnU49mkIWEwRmFposNGcLEEO&q=vegeta&limit=10');


  }




}
