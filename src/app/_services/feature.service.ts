import { Injectable } from '@angular/core';
import { IFeature } from '../features';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class FeatureService {
  private _apiUrl = 'https://aiid-api.herokuapp.com';
  private _authCreds = "root:wayne";
  private _featureCount: number;

  constructor(private _http: HttpClient) { }
   

  getFeatures(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa(this._authCreds));
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
  
    return  this._http.get(this._apiUrl + '/features', {headers:headers})
                   // .do(data => console.log( "Data Returned " + JSON.stringify(data) ))
                    .catch(this.handleError);
  }

  getFeature(id:any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa(this._authCreds));
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
  
    return  this._http.get(this._apiUrl + '/features/' + id, {headers:headers})
                   // .do(data => console.log( "Data Returned " + JSON.stringify(data) ))
                    .catch(this.handleError);
  }

  getSidebarFeatures(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa(this._authCreds));
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
  
    return  this._http.get(this._apiUrl + '/sidebarFeatures', {headers:headers})
                    //.do(data => console.log( "Data Returned " + JSON.stringify(data) ))
                    .catch(this.handleError);
  }


  private handleError(err: HttpErrorResponse){
      console.log(err.message);
      return Observable.throw(err.message);
  }

  
}
