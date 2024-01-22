import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  // lista original
  carros = [
    { id: 1, marca: 'Ford', modelo: 2006, color: 'Azul' },
    { id: 2, marca: 'Chevete', modelo: 2023, color: 'Azul' },
    { id: 3, marca: 'Ford', modelo: 2000, color: 'vermelho' },
    { id: 4, marca: 'Vectra', modelo: 1980, color: 'verde' },
    { id: 5, marca: 'Fusca', modelo: 1998, color: 'preto' },
  ];

  // lista de carros filtrados usando filter
  carrosMarcaIniciadosComLetraF = this.carros.filter((carro) => carro.marca.startsWith('F'));
  carrosAno = this.carros.filter((carro) => carro.modelo >= 2000);


  // lista de carros modificados usando map
  carrosModeloMais10 = this.carros.map((carro) => {
    return { ...carro, modelo: carro.modelo + 50 };
  });

  carrosRosa = this.carros.map((carro) => {
    return { ...carro, color: 'Rosa' };
  });


  // soma de valores usando reduce
  somaValor = this.carros.reduce((total, carro) => total + carro.modelo, 0);



 
}
