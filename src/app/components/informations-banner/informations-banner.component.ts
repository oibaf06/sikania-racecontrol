import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';  
import { ISession } from 'src/app/interfaces/ISession';  

@Component({
  selector: 'app-informations-banner',
  templateUrl: './informations-banner.component.html',
  styleUrls: ['./informations-banner.component.scss']
})
export class InformationsBannerComponent implements OnInit {

  sessionData: ISession | undefined;

  constructor(private WebsocketService: WebsocketService ) { }

  ngOnInit(): void {
    this.WebsocketService.OnSessionData().subscribe((data: any) => {
      console.log(data);
      this.sessionData = data;
    })
  }

}
