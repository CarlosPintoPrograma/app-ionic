import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  resetuser: string = '';
  resetpass: string = '';

  nombre: string = '';
  users: string = '';
  passes: string = '';  // Para la nueva contraseña
 


  isAlertOpen = false;
  alertButtons = ['OK'];
  
  constructor(private router: Router) { }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();

    if(parametros?.extras.state) {
      this.users = parametros?.extras.state['user'];
      this.passes = parametros?.extras.state['pass'];
    }
    console.log(this.users);
    console.log(this.passes)
  }

  reset() {

    let parametros: NavigationExtras = {
      state: {
        user: this.resetuser,
        pass: this.resetpass
      }
    }

    this.router.navigate(['login'], parametros);
    this.isAlertOpen = true;
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
