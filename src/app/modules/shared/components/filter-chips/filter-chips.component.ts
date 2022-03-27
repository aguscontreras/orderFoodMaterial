import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChipFilter } from '../../models';

@Component({
  selector: 'app-filter-chips',
  templateUrl: './filter-chips.component.html',
  styleUrls: ['./filter-chips.component.scss'],
})
export class FilterChipsComponent implements OnInit {
  @Input() model: ChipFilter[];
  @Output() select: EventEmitter<ChipFilter[]>;

  constructor() {
    this.model = [];
    this.select = new EventEmitter();
  }

  ngOnInit(): void {}

  onClick(index: number): void {
    const item = this.model[index];
    item.selected = !item.selected;

    const selectedChips = this.model.filter((e) => e.selected);
    this.select.emit(selectedChips);
  }
}
