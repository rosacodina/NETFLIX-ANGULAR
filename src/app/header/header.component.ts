import { Component } from '@angular/core';

@Component({
  selector: 'netflix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']


})
export class HeaderComponent {
//Javascript
//Class es el molde
  
    activated:boolean = true;
    menuWindow:boolean = true;

  //Constructor crea objetos de la clase, inicializa sus atributos (variable de un objeto/clase)
    constructor() {
  
    }

    ngOnInit():void {

    }

    clickedMenu() {
      this.activated = !this.activated;
      return this.activated;
    }  

    closeMenu() {
      this.menuWindow = !this.menuWindow;
      return this.menuWindow;
    }
}
