import { Injectable } from '@angular/core';
import { IExperiment } from '../experiments';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ExperimentService {
  private _apiUrl = 'https://aiid-api.herokuapp.com';
  private _authCreds = "root:wayne";
  private _experimentCount: number;

  constructor(private _http: HttpClient) { }

 
  getExperiments(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa(this._authCreds));
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
  
    return  this._http.get(this._apiUrl + '/experiments', {headers:headers})
                   // .do(data => console.log( "Data Returned " + JSON.stringify(data) ))
                    .catch(this.handleError);
  }

  getExperimentsByFilter(filter): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa(this._authCreds));
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
  
    return  this._http.get(this._apiUrl + '/experiments/' + filter, {headers:headers})
                   // .do(data => console.log( "Data Returned " + JSON.stringify(data) ))
                    .catch(this.handleError);
  }

  searchExperimentsByFilter(filter): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa(this._authCreds));
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
  
    let url = this._apiUrl + '/searchExperiments?' + filter ;
    return  this._http.get(this._apiUrl + '/searchExperiments?' + filter, {headers:headers})
                   // .do(data => console.log( "Data Returned " + JSON.stringify(data) ))
                    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
