import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  rUsuario: string='';
  rPass: string='';

  isAlertOpen = false;
  alertButtons = ['OK'];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  

  registrar() {
    if(this.rUsuario !== null && this.rPass !== null) {

      let parametros: NavigationExtras = {
        state: {
          user: this.rUsuario,
          pass: this.rPass
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
