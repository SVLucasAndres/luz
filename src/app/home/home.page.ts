import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}
  async ngOnInit() {
    await LocalNotifications.requestPermissions();//solicitar permisos de la app
    await LocalNotifications.schedule({//Elaboracion del objeto notificacion
      notifications: [
        {
          title: '🥵',
          body: "Esta notificación debería ejecutarse en segundo plano pero no cuando lapp esté cerrada",
          id: 1
        }
      ]
    });
  }
}
