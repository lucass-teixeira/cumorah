import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-category-button',
  templateUrl: './search-category-button.component.html',
  styleUrls: ['./search-category-button.component.scss'],
})
export class SearchCategoryButtonComponent  implements OnInit {

  @Input() label = '';
  @Input() style = {};
  @Output() clickEvent = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit() {}

  click(){
    this.clickEvent.emit(this.label);
  }

}
