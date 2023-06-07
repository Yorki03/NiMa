import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../peges/interfaces/interface.interface';

@Injectable({
  providedIn: 'root'
})

 
export class LocalService {


  public stringValue: string = '';
  private cuelloValue: string = '1';
  private cuerpoValue: string = '1';
  private mangaValue: string = '1';
  private telaValue: string = '1';

  constructor(private http: HttpClient) { }

  setIdCuello(cuello: string): void{
    
    if(this.cuelloValue != cuello)this.cuelloValue = cuello;
    //console.log(this.cuelloValue)
    this.getConfeccion();
  }
  setIdCuerpo(cuerpo: string): void{
    
    if(this.cuerpoValue != cuerpo)this.cuerpoValue = cuerpo;
    this.getConfeccion();
  }
  setIdManga(manga: string): void{
    
    if(this.mangaValue != manga)this.mangaValue = manga;
    this.getConfeccion();
  }
  setIdTela(tela: string): void{
    
    if(this.telaValue != tela)this.telaValue = tela;
    this.getConfeccion();
  }
  getConfeccion() {

    /*if(this.cuelloValue == '1' && this.cuerpoValue != '1' && this.mangaValue != '1' && this.telaValue != '1'){
      this.stringValue = '';
      this.stringValue = `${this.cuelloValue}${this.cuerpoValue}${this.mangaValue}${this.telaValue}`;
    }
    else if(this.cuelloValue != '1' && this.cuerpoValue === '1' && this.mangaValue != '1' && this.telaValue != '1'){
      this.stringValue = '';
      this.stringValue = this.cuelloValue + this.cuerpoValue + this.mangaValue + this.telaValue;
    }
    else if(this.cuelloValue != '1' && this.cuerpoValue != '1' && this.mangaValue === '1' && this.telaValue != '1'){
      this.stringValue = '';
      this.stringValue = this.cuelloValue + this.cuerpoValue + this.mangaValue + this.telaValue;
    }
    else if(this.cuelloValue != '1' && this.cuerpoValue != '1' && this.mangaValue != '1' && this.telaValue === '1'){
      this.stringValue = '';
      this.stringValue = this.cuelloValue + this.cuerpoValue + this.mangaValue + this.telaValue;
    }
    else if(this.cuelloValue != '1' && this.cuerpoValue != '1' && this.mangaValue != '1' && this.telaValue != '1'){
      this.stringValue = '';
      this.stringValue = this.cuelloValue + this.cuerpoValue + this.mangaValue + this.telaValue;
    }else{
      this.stringValue = `${this.cuelloValue}${this.cuerpoValue}${this.mangaValue}${this.telaValue}`
    }*/
    this.stringValue = `${this.cuelloValue}${this.cuerpoValue}${this.mangaValue}${this.telaValue}`;
    console.log(this.stringValue);

    return this.http.get<Productos[]>(`http://localhost:3000/producto/${this.stringValue}`);
  };
  
}
