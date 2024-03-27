import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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
  getIndex!: number;
  isShowAdd = true;
  editValue!: string;
  indexValue!: number

  @Input() items: string[] = [];
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() editItemEvent = new EventEmitter<any>();
  @Output() updateItemEvent = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  getvalueOfErea() {
    if (this.updateValue) {
      this.storeValueInput.push(this.valueOfErea.nativeElement.innerHTML);
      this.valueOfErea.nativeElement.innerHTML = '';
      this.isShowAction = true;
    } else {
      this.storeValueInput[this.getIndex] = this.valueOfErea.nativeElement.innerHTML;
      this.valueOfErea.nativeElement.innerHTML = '';
    }
  }

  deleteDesc(index:number) {
    this.items.splice(index, 1);
  }

  addNewItem() {
    this.newItemEvent.emit(this.valueOfErea.nativeElement.innerHTML);
    this.valueOfErea.nativeElement.innerHTML = '';
    this.isShowAction = true;
  }

  editItem(value: string, index: number) {
    this.valueOfErea.nativeElement.innerHTML = value;
    this.updateValue = this.valueOfErea.nativeElement.innerHTML;
    this.isShowAdd = false
    this.editValue = value;
    this.indexValue = index
  }

  updateItem() {
    let index = this.indexValue;
    let value = this.valueOfErea.nativeElement.innerHTML;
    this.items[index] = value
    this.items.map((value, index) => index === index ? value : value);
    this.valueOfErea.nativeElement.innerHTML = ''
    this.isShowAdd = true
  }

}
