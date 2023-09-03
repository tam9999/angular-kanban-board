import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css'],
})
export class AddListComponent {
  @Output() onAddNewList = new EventEmitter();
  newList: string = '';
  addNewList() {
    if (this.newList.trim()) {
      this.onAddNewList.emit(this.newList);
      this.newList = '';
    }
  }
}
