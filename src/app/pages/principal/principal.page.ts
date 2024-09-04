import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  usuario: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();

    if(parametros?.extras.state) {
      this.usuario = parametros?.extras.state['name'];
    }
    console.log(this.usuario);
  }

}
