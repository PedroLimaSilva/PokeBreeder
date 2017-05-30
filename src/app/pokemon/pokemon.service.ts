import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const API_URL = "http://localhost:2403/";
export const USER_ID = "76df24037d68a8ba";

@Injectable()
export class PokemonService {

  constructor( private _http: Http) { }

  getSprite(dex: string){
    return "assets/img/sprites/pokemon/" + dex + "/" + dex + ".gif";

  }

  getPokemon(){
    return this._http.get(API_URL+"pokemon")
               .map(this.extractData)
               .catch(this.handleError);
  }
  getEggs(){
    return this._http.get(API_URL+"eggs")
               .map(this.extractData)
               .catch(this.handleError);
  }
  hatchEgg(eggID:string, dex:number, user_id:string){
    this._http.post(API_URL+"pokemon",{'ownerID':user_id, 'dex': dex})
              .subscribe(
                ()=>{},
                error=>console.log(error),
                ()=>{}
              );
    this._http.delete(API_URL+"eggs/"+eggID)
              .subscribe(
                ()=>{},
                error => console.log(error),
                ()=>{}
              );
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [ ] ;
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
