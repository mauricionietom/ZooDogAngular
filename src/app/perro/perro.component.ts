import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css']
})
export class PerroComponent implements OnInit {

  constructor(private route: ActivatedRoute, private  http: HttpClient) { }
  puesto: string;
  perro: {puesto:string, raza:string, Personalidad:string, energia:string, descripcion:string }
  
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=> {
      this.puesto =params ['puesto']
    this.http.get('http://localhost:8080/perro/'+this.puesto).subscribe(
      (perro:any)=> {
        this.perro = perro;
      }
    )
    
  }
    )
}
}
