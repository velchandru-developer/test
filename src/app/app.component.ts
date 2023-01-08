import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard';
  dashboardData = [
    {
      name: 'air-quality',
      title: 'Air Quality',
      value: 72,
      isMaxMin: true,
      maxValue: 93,
      minValue: 61
    },
    {
      name: 'temperature',
      title: 'Temperature',
      value: 21,
      isMaxMin: true,
      maxValue: 26,
      minValue: 18,
      isTemp: true
    },
    {
      name: 'audio',
      title: 'Audio',
      value: 2,
      status: 'PLAYING',
      infoTitle: 'Total',
      infoValue: '5'
    },
    {
      name: 'displays',
      title: 'Displays',
      value: 10,
      extraValue: '/16',
      infoTitle: 'On Time',
      infoValue: '00:00'
    },
    {
      name: 'lighting',
      title: 'Lighting',
      value: 32,
      status: 'ON',
      infoTitle: 'Total',
      infoValue: '43'
    },
  ]
}
