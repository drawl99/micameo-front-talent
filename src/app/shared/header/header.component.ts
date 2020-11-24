import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Talent } from 'src/app/models/talento.model';
import { User } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  public user: User;
  public talent: Talent;
  constructor(public authService: AuthService,
              private router: Router) { 
                // this.user = authService.user;
                this.talent = authService.talent;
              }

  ngOnInit(): void {
    console.log(this.talent);
    
  }

  logOut(){

    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}
