import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private publicRouter:Router) { }

  ngOnInit() {
    // this.test.getTest().subscribe( chats => {
    //   chats
  }
    
  Mover(lugar){
    this.publicRouter.navigate(['/'+lugar]);

  }
}
