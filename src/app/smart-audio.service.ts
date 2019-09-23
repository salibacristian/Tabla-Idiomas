import { Injectable } from '@angular/core';

import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class SmartAudioService {
  sounds = []


  constructor(public nativeAudio: NativeAudio) {

  }

  preload(idioma, numero, tipo) {
    let key = idioma+numero;
    let audioTest = this.sounds.find((sound) => {
      return sound.key === key;
    });

    if(audioTest){
      return
    }
    let path = "../assets/audios/"+tipo+"/"+idioma+"/"+numero+".mp3";
    this.nativeAudio.preloadSimple(key, path);

    let audio = {
      key: key,
      asset: key,
      type: 'native'
    };

    this.sounds.push(audio);

  }

  play(idioma, numero, tipo) {
    let path = "../assets/audios/"+tipo+"/"+idioma+"/"+numero+".mp3";
    let audioAsset = new Audio(path);
    audioAsset.play();


  }

}