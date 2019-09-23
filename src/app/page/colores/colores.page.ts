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
  constructor(private publicRouter:Router,private nativeAudio: SmartAudioService) { }
  ngOnInit() {
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
