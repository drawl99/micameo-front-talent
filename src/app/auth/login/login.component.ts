import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmit = false;

  public loginForm = this.fb.group({
    username: ['josephgonzales@taylor.com', Validators.required],
    password: ['Yordi123', Validators.required]
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){

    this.authService.login(this.loginForm.value).subscribe(
      resp => {
        // console.log(resp);
        if(!resp.is_talent){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usted no hace parte de los talentos',
          });
        }else{
          this.router.navigateByUrl('/');
        }
        
      }, err => {
        console.log(err);
        Swal.fire({
          title: 'ERROR',
          text: 'El correo o la contraseña son incorrectos',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    );
    // this.router.navigateByUrl('/');
  }

}
