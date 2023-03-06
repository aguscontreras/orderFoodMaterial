import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemMenuModel } from '../../models';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() set menuItem(item: ItemMenuModel) {
    this.item = item;
  }

  @Output() select = new EventEmitter<number>();
  @Output() detail = new EventEmitter<number>();

  item: ItemMenuModel;

  constructor() {}

  ngOnInit(): void {}

  onAgregar(itemId: number): void {
    this.select.emit(itemId);
  }

  onDetalle(itemId: number): void {
    this.detail.emit(itemId);
  }
}
