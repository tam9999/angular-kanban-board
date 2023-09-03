import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  jobLists = [
    {
      name: 'To do',
      jobs: ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'],
      newJob: '',
    },
    {
      name: 'Doing',
      jobs: [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
      ],
      newJob: '',
    },
  ];
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

  addNewJob(index: number, value: string) {
    if (value === '') {
      alert('Please enter value!!!');
    } else {
      this.jobLists[index].jobs.push(value);
      this.jobLists[index].newJob = '';
    }
  }
}
