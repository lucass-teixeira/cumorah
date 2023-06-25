import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent  implements OnInit {

  @Input() label: string = '';
  @Input() style: any = null;
  @Input() isExpand: boolean = true;
  @Input() isSecondary: boolean = false;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  handleClick(){
    this.onClick.emit();
  }

}
