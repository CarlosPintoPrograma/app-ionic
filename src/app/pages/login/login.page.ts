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
  mdl_name: string = '';


  usuario: string = '';
  contrasena: string = '';
  

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
      this.mdl_user = parametros?.extras.state['user'];
      this.mdl_pass = parametros?.extras.state['pass'];
      this.mdl_name = parametros?.extras.state['name'];
    }
    console.log(this.mdl_user);
    console.log(this.mdl_pass);
    console.log(this.mdl_name);
  }

  ingresar() {
    
    this.spinnerVisible = true;
    this.warningVisible = false;

    setTimeout(() => {
      // Verifica que los campos no estén vacíos
      if (this.mdl_user.trim() == '' || this.mdl_pass.trim() == '') {
        this.warningVisible = true;
        this.isToastOpen = false;
        this.mensaje = "Por favor, ingrese usuario y contraseña";
        console.log(this.mensaje);
        
      } else if (this.mdl_user == this.usuario && this.mdl_pass == this.contrasena) {
        let parametros: NavigationExtras = {
          state: {
            name: this.mdl_name,
            user: this.mdl_user,
            pass: this.mdl_pass
            
          }
        }
        this.router.navigate(['principal'], parametros);
      } else {
        this.warningVisible = true;
        this.isToastOpen = false;
        this.mensaje = "Credenciales Inválidas";
        console.log(this.mensaje);
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

  restablecer() {
    this.router.navigate(['restablecer']);
  }

}
