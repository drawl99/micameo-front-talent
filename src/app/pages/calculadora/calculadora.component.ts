import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Talent } from 'src/app/models/talento.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styles: [
  ]
})
export class CalculadoraComponent implements OnInit {

  calculatorForm: FormGroup;
  public comision = 0.25;
  public cantidadCameos: number;
  public talent: Talent;
  constructor(private fb: FormBuilder, private authService: AuthService) { 
    this.talent = authService.talent;
  }

  ngOnInit(): void {

    this.calculatorForm = this.fb.group({
      ganancia: [0, [Validators.required]],
      precio: [{ value: this.talent.price, disabled: true }, [Validators.required]]
    });
  }


  calcular() {
    const valorEsperado = this.calculatorForm.get('ganancia').value;
    const precio = this.calculatorForm.get('precio').value;

    console.log('CALCULANDO...');
    if (valorEsperado < precio) {
      Swal.fire({
        title: 'Error!',
        text: 'El valor esperado no debe ser menor al precio',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
      return;
    }
    this.cantidadCameos = (valorEsperado)/(precio-(precio*this.comision));
    // this.cantidadCameos =  ((valorEsperado + (this.comision * valorEsperado)) / precio);
    console.log(this.cantidadCameos);

  }
} 
