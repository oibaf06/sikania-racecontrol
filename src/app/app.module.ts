import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionInfoComponent } from './components/session-info/session-info.component';

import { environment } from 'src/environments/environment';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { InformationsBannerComponent } from './components/informations-banner/informations-banner.component';
import { TrackInfoComponent } from './components/track-info/track-info.component';
import { TelemetryComponent } from './components/telemetry/telemetry.component';

const config: SocketIoConfig = {
	url: environment.socketUrl, // socket server url;
	options: {
		transports: ['websocket']
	}
}

@NgModule({
  declarations: [
    AppComponent,
    SessionInfoComponent,
    InformationsBannerComponent,
    TrackInfoComponent,
    TelemetryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
