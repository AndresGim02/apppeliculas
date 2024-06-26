import { Component, Input } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ServicioService } from '../../servicio/servicio.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {

  @Input('movie') movie: any;

  constructor(private servicio: ServicioService, private route: Router) {}

  getPoster() {
    if(this.movie.Poster === 'N/A'){
      return 'https://fakeimg.pl/400x400';
    } else {
      return this.movie.Poster
    }
  }

  getPelisId(id: string){
    this.route.navigate(['/detail', id]);
    }

  ngOnInit(): void{
    
    }
  }