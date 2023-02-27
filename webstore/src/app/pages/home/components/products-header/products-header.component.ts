import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: `products-header.component.html`,
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = "desc ↓";
  itemsShowCount = 5;
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort:string):void{
    this.sort = newSort;
  }

  onItemsUpdated(count: number):void{
    this.itemsShowCount = count;
  }

  onShowColumnsUpdated(colsNumb:number):void{
    this.columnsCountChange.emit(colsNumb);
  }
}
