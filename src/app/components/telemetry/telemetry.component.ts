import { Component, OnInit } from '@angular/core';
import { ITelemetry } from 'src/app/interfaces/ITelemetry';
import { WebsocketService } from 'src/app/services/websocket.service';  

@Component({
  selector: 'app-telemetry',
  templateUrl: './telemetry.component.html',
  styleUrls: ['./telemetry.component.scss']
})
export class TelemetryComponent implements OnInit {

  telemetry: ITelemetry | undefined;

  constructor(private WebsocketService: WebsocketService ) { }

  ngOnInit(): void {
    this.WebsocketService.OnTelemetry().subscribe((data: any) => {
      console.log(data);
      this.telemetry = data;
    })
  }
}
