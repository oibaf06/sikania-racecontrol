import { Component, Input, OnInit } from '@angular/core';
import { WeekendInfo } from 'src/app/interfaces/ISession';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss']
})
export class TrackInfoComponent implements OnInit {

  @Input() weekendInfo: WeekendInfo | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
