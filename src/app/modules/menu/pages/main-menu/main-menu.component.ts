import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { ChipFilter } from '../../../shared/models';
import { ItemMenuModel } from '../../models';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  chipsModel: { label: string; value: any }[];
  menuItems: ItemMenuModel[] = [];

  constructor(private readonly menuService: MenuService) {}

  ngOnInit(): void {
    this.getCategorias();
    this.getItemsMenu();
  }

  getCategorias(): void {
    this.menuService
      .getCategorias()
      .pipe(first())
      .subscribe({
        next: (categorias) => {
          this.chipsModel = categorias.map((e) => {
            return { label: e.display_name, value: { ...e } };
          });
        },
      });
  }

  getItemsMenu(): void {
    this.menuService
      .getItemsMenu()
      .pipe(first())
      .subscribe({
        next: (menuItems) => (this.menuItems = menuItems),
      });
  }

  onChipSelect(selected: ChipFilter[]): void {
    const selectedIds = selected.map((e) => e.value.id);

    if (!selectedIds.length) {
      this.getItemsMenu();
      return;
    }

    this.menuService
      .filterItemsByCategoria(selectedIds)
      .pipe(first())
      .subscribe({ next: (menuItems) => (this.menuItems = menuItems) });
  }

  onItemSelect(itemId: number): void {
    console.log(itemId);
  }

  onItemDetail(itemId: number): void {
    console.log(itemId);
  }
}
