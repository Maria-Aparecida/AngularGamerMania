import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../models/promocao';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {
  url =  "http://localhost:3000/promocao"

  constructor(private httpClient: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}) 

  }
  getPromocao(): Observable<Promocao[]> {
    return this.httpClient.get<Promocao[]>(this.url)
  }
  postPromocao(promocao: Promocao):Observable<Promocao> {
    return this.httpClient.post<Promocao>(this.url,JSON.stringify(promocao),this.httpOption)
  }
}
