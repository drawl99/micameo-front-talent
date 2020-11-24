import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BalanceService } from 'src/app/services/balance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  public withdrawForm: FormGroup;
  public msg: string = '';
  constructor(private balanceService: BalanceService,
              private fb: FormBuilder,) { 

  }

  ngOnInit(): void {
    this.withdrawForm = this.fb.group({
      monto: [0, Validators.required]
    });
  }

  withdraw(){
    const monto = this.withdrawForm.get('monto').value;
    this.balanceService.withdraw(monto).subscribe(
      data => {},
      err => {
        err.error.errors.forEach(element => {
          this.msg += element.message + '\n';
          // console.log(element);
          
        });
        Swal.fire({
          title: 'ERROR',
          text: this.msg,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        
      },
      () => {
        this.msg = 'El retiro se ha creado con éxito, revisa tu historial de retiros';
        Swal.fire({
          title: 'ÉXITO',
          text: this.msg,
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      },
    );
  }

}
