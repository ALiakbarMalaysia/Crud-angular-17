import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  @ViewChild('valueOfErea') valueOfErea!: ElementRef;
  showTemplate = false;
  storeValueInput: string[] = [];
  isShowAction = false;
  updateValue!: string;
  getIndex!: number

  constructor() { }

  ngOnInit() {
  }

  getvalueOfErea() {
    if (!this.updateValue) {
      this.storeValueInput.push(this.valueOfErea.nativeElement.innerHTML);
      this.valueOfErea.nativeElement.innerHTML = '';
      this.isShowAction = true;
    } else {
      this.storeValueInput[this.getIndex] = this.valueOfErea.nativeElement.innerHTML;
      this.valueOfErea.nativeElement.innerHTML = '';
    }
  }

  deleteDesc() {
    const indexToDelete = 0;
    this.storeValueInput.splice(indexToDelete, 1);
  }

  editDesc(value: string, index: number) {
    this.getIndex = index;
    this.updateValue = value;
    this.valueOfErea.nativeElement.innerHTML = this.updateValue
  }

}
