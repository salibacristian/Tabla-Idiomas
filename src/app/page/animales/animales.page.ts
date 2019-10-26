import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartAudioService } from 'src/app/smart-audio.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {
  animal=0;
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

  Seleccionar(animal){
    this.animal=animal;
    let idioma = localStorage.getItem('idioma');
    this.nativeAudio.play(idioma, this.animal, "animales");
  }

  
}
