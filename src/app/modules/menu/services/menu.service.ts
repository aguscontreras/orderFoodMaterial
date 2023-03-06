import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CategoriaModel, ItemMenuModel } from '../models';

@Injectable()
export class MenuService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getCategorias(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(`${this.apiUrl}/categories`);
  }

  getCategoria(id: number): Observable<CategoriaModel | null> {
    return this.http
      .get<CategoriaModel[]>(`${this.apiUrl}/categories`)
      .pipe(map((categorias) => categorias.find((e) => e.id === id) || null));
  }

  getItemsMenu(): Observable<ItemMenuModel[]> {
    return this.http.get<ItemMenuModel[]>(`${this.apiUrl}/items`);
  }

  filterItemsByCategoria(categoriasId: number[]): Observable<ItemMenuModel[]> {
    return this.http
      .get<ItemMenuModel[]>(`${this.apiUrl}/items`)
      .pipe(
        map((items) =>
          items.filter((item) => categoriasId.includes(item.category.id))
        )
      );
  }
}
