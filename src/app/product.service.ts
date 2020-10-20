import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import rxjs/add/operator/map;

@Injectable()
export class ProductService {
  private string _albumUrl = '../assets/album.json';
  constructor(private _http: Http) { }
  
  getAlbum(id: number) {
	  return this._http.get(_albumUrl);
  }
}
