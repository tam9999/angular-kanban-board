import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobLists } from '../job-list.model';
import { PayLoad } from '../pay-load.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() jobLists: JobLists[];
  @Output() onAddNewJob = new EventEmitter();
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addNewJob(payload: PayLoad) {
    this.onAddNewJob.emit(payload);
  }

  removeListJob(index: number) {
    this.jobLists.splice(index,1)
  }

  removeJob(index: number, position:number) {
    this.jobLists[index].jobs.splice(position,1)
    console.log(this.jobLists)
  }
}
