import { NavigationExtras, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_user: string = '';
  mdl_pass: string = '';

  user: string = '';
  pass: string = '';
  

  warningVisible: boolean = false;
  spinnerVisible: boolean = false;

  isToastOpen: boolean = false;

  duracion: number = 2000;

  mensaje: string = '';

  constructor(private router: Router) { 


  }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();

    if(parametros?.extras.state) {
      this.user = parametros?.extras.state['user'];
      this.pass = parametros?.extras.state['pass'];
    }
    console.log(this.user)
  }

  login() {
    
    this.spinnerVisible = true;
    this.warningVisible = false;

    setTimeout(() => {
      if(this.mdl_user == this.user && this.mdl_pass == this.pass){

        let parametros: NavigationExtras = {
          state: {
            user: this.mdl_user,
            pass: this.mdl_pass
          }
        }
        this.router.navigate(['principal'], parametros)
      } else {
        this.warningVisible = true;
        this.isToastOpen = false;
        this.mensaje = "Credenciales Inválidas"
        
        console.log('credenciales incorrectas')
      }

      this.spinnerVisible = false;
    }, 2000); 
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  registro() {
    this.router.navigate(['registro']);
  }

}
