import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  ListaPerros: Array<{puesto:string, raza:string, Personalidad:string, energia:string, descripcion:string }>;
  comentarios: Array<{comentario: string}>;

  ngOnInit(): void {

    this.http.get('http://localhost:8080/perros').subscribe(
      (perros : any) => {
        const listperros: Array<{puesto: string, raza: string, Personalidad: string, energia: string,descripcion: string}> = perros.perro;  
        this.ListaPerros = listperros;
        console.log(this.ListaPerros);
      }
    )

    this.http.get('http://localhost:8080/ListarComentarios').subscribe(
      (comentarios: any)=> {
        this.comentarios = comentarios.comentarios;
      }

    )
   }

  constructor(private http: HttpClient){}
 
  AgregarComentario(comentario:String){
    this.http.post('http://localhost:8080/AgregarComentario', {'comentario':comentario}).subscribe(
      ()=>{
        this.http.get('http://localhost:8080/ListarComentarios').subscribe(
          (comentarios:any)=>{
            this.comentarios = comentarios.comentarios;
          }
        )

      }
    )
  }
}
