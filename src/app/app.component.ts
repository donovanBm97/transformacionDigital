import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  title = 'transformacionDigital';
  public formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder   ) { }
  
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.pattern('[0-9]{10}')],
      empresa: ['', Validators.required],
      cargo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      entidad:['', [Validators.required]]
    });
  }

  superHero(){
    console.log('vamos a otra pagina')
  }

}
