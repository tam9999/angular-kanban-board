import { Component } from '@angular/core';
import { JobLists } from './job-list.model';
import { PayLoad } from './pay-load.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-kanban-board';

  jobLists: JobLists[] = [
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
  addNewJob(payload: PayLoad) {
    this.jobLists[payload.index].jobs.push(payload.value);
    this.jobLists[payload.index].newJob = '';
  }
  addNewList(payload: PayLoad) {
    this.jobLists.push({
      name: payload.value,
      jobs: [],
      newJob: '',
    });
  }
}
