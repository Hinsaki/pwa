import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sidenav_click() {
    this.sidenavClick.emit(null);
  }
}
