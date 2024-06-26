import { Component } from '@angular/core';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';
import { ServicioService } from '../../servicio/servicio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [TarjetaComponent, CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  
  movie: any[] = [];

  constructor(private servicio: ServicioService) {}

  getPeliculas(busqueda: string){
    console.log(busqueda);
    this.servicio.getPelis(busqueda).subscribe(data =>{
    this.movie = data !== undefined ? data : [];
     
    })
  }
}
