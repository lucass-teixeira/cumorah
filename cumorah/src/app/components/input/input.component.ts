import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent  implements OnInit {

  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() style: string = '';
  @Output() textChanged: EventEmitter<string> = new EventEmitter();

  focused: boolean = false;
  constructor() { console.log('entrou')}

  ngOnInit() {}

  onBlur(event: any){
    console.log(event)
    const value = event.target.value;
    console.log(value);
    if(!value){
      this.focused = false;
    }
  }

  inputChanged(event: any){
    this.textChanged.emit(event.target.value);
  }

}
