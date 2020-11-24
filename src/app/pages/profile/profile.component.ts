import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Talent } from 'src/app/models/talento.model';
import { User } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { TalentService } from 'src/app/services/talent.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [
    './profile.component.css'
  ]
})
export class ProfileComponent implements OnInit {
  public user: User;
  public talent: Talent;
  public profileForm: FormGroup;

  public isLoading = true;
  public uploadPercent: Observable<number>;
  public urlImage: Observable<string>;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private talentService: TalentService,
    private storage: AngularFireStorage,
  ) {
    // this.user = this.authService.user;
    this.talent = this.authService.talent;
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      first_name: [this.talent.user.first_name, Validators.required],
      last_name: [this.talent.user.last_name, Validators.required],
      description: [this.talent.description, Validators.required],
      email: [this.talent.user.email, [Validators.email, Validators.required]],
      response_days: [this.talent.response_days, Validators.required],
      price: [+this.talent.price, Validators.required],
      birthday: [this.talent.birthday || '', Validators.required],
      phone_number: [this.talent.phone_number, Validators.required]
    });

  }

  actualizarPerfil() {
    this.talent.user.first_name = this.profileForm.get('first_name').value;
    this.talent.user.last_name = this.profileForm.get('last_name').value;
    this.talent.user.email = this.profileForm.get('email').value;
    this.talent.description = this.profileForm.get('description').value;
    this.talent.price = this.profileForm.get('price').value;
    this.talent.response_days = this.profileForm.get('response_days').value;
    this.talent.birthday = this.profileForm.get('birthday').value;
    this.talent.phone_number = this.profileForm.get('phone_number').value;
    console.log(this.profileForm.value);
    this.userService.updateUser(this.talent.user).subscribe(
      data => {
        this.talent.user = data;
        this.talentService.update(this.talent).subscribe(
          data => {
            this.talent = data;
          }, error => {
            console.log(error);

            Swal.fire({
              title: 'ERROR',
              text: 'Algo salió mal',
              icon: 'error',
              confirmButtonText: 'Cool'
            })
          },
          () => {
            Swal.fire({
              title: 'ACTUALIZADO',
              text: 'Tu perfil se ha actualizado con éxito',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        );
      }, error => {
        console.log(error);

      },
      () => {
        console.log('exito');

      }
    );
  }

  cambiarImagen(e: any) {
    this.isLoading = true;
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `avatars/profile_talent_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(()=>{
      this.urlImage = ref.getDownloadURL();
      this.urlImage.subscribe(
        (url) => {
          this.talent.profile_image = url;
          this.talentService.update(this.talent).subscribe(
            data => {
              this.talent = data;

            }, error => {
              console.log(error);
              
            }, () => {
              this.isLoading = false;
            }
          );
        }
      );
    })).subscribe();
  }
}
