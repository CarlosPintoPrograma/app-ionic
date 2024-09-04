import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  
  rusuario: string = '';
  rpass: string = '';
  rnombre: string = '';

  isAlertOpen = false;
  alertButtons = ['OK'];

  constructor(private router: Router) { }

  ngOnInit() {

  }

  registrar() {
    
    if(this.rusuario !== null && this.rpass !== null && this.rnombre !== null) {

      let parametros: NavigationExtras = {
        state: {
          user: this.rusuario,
          pass: this.rpass,
          name: this.rnombre
        }
      }

      this.router.navigate(['login'], parametros);
    } else {
      this.isAlertOpen = true;
    }
  }

  

  
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}
