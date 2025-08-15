import { DialogModule } from 'primeng/dialog';
import { Component, signal, Type } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketClient } from './services/websocket.service';
import { HttpService } from './services/http.service';
import { EngineDataPoint } from './components/engine-graph/engine-graph.component';

export type GraphData = { time: number, pinA: number, pinB: number }[]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'final-project';
  displayInfoDialog = false;

  constructor(
    private websocketClient: WebSocketClient,
    private httpClient: HttpService,
    public router: Router
  ) {
    this.getEncoderGraphData('encoder_recording_5kom.json',)
    this.getEncoderGraphData('encoder_recording_10kom.json')
    this.getEncoderGraphData('experiment_no_resistors.json')
    this.getEngineGraphData('pullhistory.json')
  }

  items = [
    {
      label: 'CARE',
      icon: 'pi pi-tablet',
      command: () => {
        this.router.navigate(['/care']);
        this.active = 0;
      }
    },
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        this.router.navigate(['/']);
      }
    },
    {
      label: 'Info',
      icon: 'pi pi-info-circle',
      command: () => {
        this.displayInfoDialog = true;
      }
    }
  ];

  // Start on the new Account step (index 0)
  active: number = 0;

  // NEW: fields bound in the first step’s form
  name: string = '';
  email: string = '';
  password: string = '';

  testVal = signal('0')

  graphData: Map<string, GraphData> = new Map();
  engineData: EngineDataPoint[] = []
  activeStep: any;
prevCallback: any;


  // Optional: if you want your Continue button to do anything custom
  onAccountContinue() {
    // e.g., basic validation or log
    // console.log({ name: this.name, email: this.email });
    // then advance programmatically (if not using nextCallback):
    // this.active = 1;
  }

  getEngineGraphData(graphName: string) {
    this.httpClient.getGraphData(graphName).subscribe((data: any) => {
      let rawData: EngineDataPoint[] = [...data];
      console.log(data)
      this.engineData = rawData.map(({rpm, delay, weight}) => ({
        rpm: rpm,
        delay: delay,
        weight: weight
      }));
    })
  }

  getEncoderGraphData(graphName: string) {
    this.httpClient.getGraphData(graphName).subscribe((data: any) => {
      let rawData: [string, { A: number, B: number }][] = [...data];
      console.log(data)
      let dataCon = this.graphData.get(graphName) as GraphData
      dataCon = rawData.map(([timestamp, pins]) => ({
        time: new Date(timestamp).getTime(),
        pinA: pins.A,
        pinB: pins.B
      }));
    
      this.graphData.set(graphName, dataCon)
    })
  }

  tare() {
    console.log('tare');
    this.httpClient.tareScale().subscribe(async val => {
      console.log(val)
    })
  }

  connect() {
    console.log('connect');
    this.websocketClient.initConnection()
  }

  start() {
    console.log('start');
    this.httpClient.initGetSensor().subscribe(async val => {
      console.log(val)
      await this.websocketClient.addSignal('force')
      this.testVal = this.websocketClient.getSignals().get('force')!
    })

    // this.httpClient.initMotor().subscribe(async val => {
    //   console.log(val)
    //   await this.websocketClient.addSignal('motor')
    //   this.testVal = this.websocketClient.getSignals().get('motor')!
    // })
  }
}
