import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT:{[id:number]:number} ={1:400,3:335,4:350};
@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit {
  cols = 3;
  category:string | undefined;
  rowsHeight = ROWS_HEIGHT[this.cols];
  constructor() { }

  ngOnInit(): void {
  }

  onColumnsUpdated(colsNumber: number):void{
    this.cols = colsNumber;
    this.rowsHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory:string):void{
    this.category = newCategory;
  }
}
