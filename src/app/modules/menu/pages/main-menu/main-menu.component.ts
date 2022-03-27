import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { ChipFilter } from '../../../shared/models';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  chipsModel: { label: string; value: any }[];

  constructor(private readonly menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService
      .getCategorias()
      .pipe(first())
      .subscribe({
        next: (categorias) => {
          this.chipsModel = categorias.map((e) => {
            return { label: e.displayName, value: { ...e } };
          });
        },
      });
  }

  onChipSelect(selected: ChipFilter[]): void {
    const selectedIds = selected.map((e) => e.value.id);
    console.log(selectedIds);
  }
}
