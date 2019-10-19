import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartAudioService } from 'src/app/smart-audio.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

  color=0;
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
  constructor(private publicRouter:Router,private nativeAudio: SmartAudioService) { }
  ngOnInit() {
    switch (localStorage.getItem('idioma')) {
      case 'español':
        this.cambiarIdioma(this.idiomas[2]);
        break;
        case 'ingles':
          this.cambiarIdioma(this.idiomas[1]);
        break;
        case 'portugues':
          this.cambiarIdioma(this.idiomas[0]);
        break;

    }
  }
  
  cambiarIdioma(idioma){
    this.idioma = idioma.foto;
    localStorage.setItem('idioma', idioma.idioma);
  }

  Home(){
    this.publicRouter.navigate(['/home']);
  }

  Seleccionar(color){
    this.color=color;
  }

  Escuchar(){
    let idioma = localStorage.getItem('idioma');
    this.nativeAudio.play(idioma, this.color, "colores");

  }
}
