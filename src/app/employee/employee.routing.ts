import { Routes } from '@angular/router';
import { AddressBookComponent } from './address-book/address-book.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FileComponent } from './file/file.component';
import { LeaveComponent } from './leave/leave.component';
import { LogbookComponent } from './logbook/logbook.component';
import { ReimburseComponent } from './reimburse/reimburse.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'to-do-list', pathMatch: 'full' },
  { path: 'address-book', component: AddressBookComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'file', component: FileComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'logbook', component: LogbookComponent },
  { path: 'reimburse', component: ReimburseComponent },
  { path: 'to-do-list', component: ToDoListComponent }
];

export const employeeRouter = routes;
