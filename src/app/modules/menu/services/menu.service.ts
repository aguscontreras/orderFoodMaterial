import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CategoriaModel } from '../models';

@Injectable()
export class MenuService {
  apiUrl: string;
  categorias: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.categorias = environment.endpoints.categorias;
  }

  getCategorias(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(`${this.apiUrl}/${this.categorias}`);
  }

  getCategoria(id: number): Observable<CategoriaModel | null> {
    return this.http
      .get<CategoriaModel[]>(`${this.apiUrl}/${this.categorias}`)
      .pipe(map((categorias) => categorias.find((e) => e.id === id) || null));
  }
}
