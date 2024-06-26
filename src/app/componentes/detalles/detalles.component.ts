import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from '../../servicio/servicio.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

 detalles: any;

 constructor(private router: ActivatedRoute, private servicio: ServicioService, private route: Router){
    this.router.params.subscribe(params =>{
    this.servicio.getPelisId(params['id']).subscribe(res => {
    console.log(res);
    this.detalles = res;})
  })
}

 getPoster() {
  if(this.detalles.Poster === 'N/A'){
    return 'https://fakeimg.pl/400x400';
  } else {
    return this.detalles.Poster
  }
}

 Volver(){
  this.route.navigate(['/search']);
  }

  ngOnInit() {}
}
