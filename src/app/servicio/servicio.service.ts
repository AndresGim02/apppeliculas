import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Api, Movie } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  url: string = "//www.omdbapi.com/?apikey=d79cf560&"

  constructor(private http: HttpClient) { }

  getPelis(busqueda: string): Observable <Movie[]>{
    return this.http.get<Api>(this.url + '&s=' + busqueda).pipe(
      map(res =>{
        return res.Search;
      })
    );
  }

  getPelisId(id: string){
    return this.http.get(this.url + '&i=' + id);
  }
}
