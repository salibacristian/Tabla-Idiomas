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
  constructor(private publicRouter:Router,private nativeAudio: SmartAudioService) { }
  ngOnInit() {
  }
  Home(){
    this.publicRouter.navigate(['/home']);
  }

  Seleccionar(animal){
    this.animal=animal;
  }

  Escuchar(){
    let idioma = localStorage.getItem('idioma');
    this.nativeAudio.play(idioma, this.animal, "animales");
  }
}
