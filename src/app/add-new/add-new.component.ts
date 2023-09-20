import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {
  @Input() placeholder:string;
  @Input() index: number;
  @Output() onAddNew = new EventEmitter();
  input: string = '';
  addNew() {
    if (this.input.trim()) {
      this.onAddNew.emit({index: this.index, value: this.input});
      this.input = '';
    }
  }
}
