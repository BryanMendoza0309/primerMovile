import { Component, OnInit } from '@angular/core';
import { JsonPlantillaService } from '../servicios/json-plantilla.service'; 
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  datos: any = [];
  textoBuscar='';
  constructor(private placeholder: JsonPlantillaService ) {}
  ngOnInit(): void {
    this.showData();
  }
  
  showData() {
    this.placeholder.getPlatilla()
      .then(data =>  {
        
         this.datos= data['persona'];
      }).catch(err =>{
              
      });
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
  }

}
