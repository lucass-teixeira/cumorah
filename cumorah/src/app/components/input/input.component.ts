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
  @Output() closeInput: EventEmitter<boolean> = new EventEmitter();

  value = '';
  focused: boolean = false;
  constructor() {}

  ngOnInit() {}

  onBlur(event: any){
    const value = event.target.value;
    if(!value){
      this.focused = false;
    }
  }

  inputChanged(event: any){
    this.textChanged.emit(event.target.value);
    console.log(this.value)
  }

  closeEvent(){
    this.closeInput.emit(true);
    console.log('passou')
  }

}
