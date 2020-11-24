import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/usuario.model';
import { Talent } from 'src/app/models/talento.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  public user: User;
  public talent: Talent;
  constructor( private sideBarService: SidebarService,
              private authService: AuthService,
              private router: Router ) { 
    this.menuItems = sideBarService.menu;
    // this.user = authService.user;
    this.talent = authService.talent;
  }

  ngOnInit(): void {
  }

  logOut(){

    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}
