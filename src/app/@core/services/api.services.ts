import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: `root`,
})
export class ApiService {

  urlRoot: string;

  constructor(private http: HttpClient) {
  }
}
