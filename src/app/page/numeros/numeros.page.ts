import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumerosPageModule } from './numeros.module';
import { SmartAudioService } from 'src/app/smart-audio.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {
  numero=0;
  constructor(private publicRouter:Router,private nativeAudio: SmartAudioService) { }
  ngOnInit() {
  }
  Home(){
    this.publicRouter.navigate(['/home']);
  }

  Seleccionar(numero){
    this.numero=numero;
  }

  Escuchar(){
    let idioma = localStorage.getItem('idioma');
    this.nativeAudio.play(idioma, this.numero, "numeros");

  }
}
