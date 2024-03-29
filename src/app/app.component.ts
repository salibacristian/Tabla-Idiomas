import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';
import { AuthService } from './servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  showSplash = true;
  titulo = 'Tabla Didáctica';
  idioma='../assets/icon/españa.png';
  idiomas=[
    {
      'foto':'../assets/icon/portugal.png',
      'idioma':'portugues'
    },
    {
      'foto':'../assets/icon/inglaterra.png',
      'idioma':'ingles'
    },
    {
      'foto':'../assets/icon/españa.png',
      'idioma':'español'
    }
  ]

  selectIdioma=0;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private AFauth: AuthService,
    private publicRouter:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(()=>{this.showSplash=false;})
    });
    localStorage.setItem('idioma','español')
  }
  

  LogOut(){
    this.AFauth.logOut();
    this.publicRouter.navigate(['/log-in']);
  }

  cambiarIdioma(){
    this.selectIdioma += 1;
    if(this.selectIdioma > 2)
      this.selectIdioma = 0;
    this.idioma = this.idiomas[this.selectIdioma].foto;
    localStorage.setItem('idioma', this.idiomas[this.selectIdioma].idioma);
  }
}
