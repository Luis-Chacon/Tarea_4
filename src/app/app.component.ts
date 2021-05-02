import { Component } from '@angular/core';
import { ApiModels } from './MyApi.Models/ApiModels';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  welcomMessage: string;

  url: string;

  myApiResponseData: ApiModels.RootObject;

  proceso: boolean;


  ngOnInit()
  {
    this.welcomMessage="Bienvenciod a mi App de Rick and Morty";

    this.url = "https://rickandmortyapi.com/api/character";     //https://rickandmortyapi.com/api/character

    this.myApiResponseData = <ApiModels.RootObject>{};

    this.proceso = true;

    this.callMyApi();
  }


  callMyApi()
  {
    this.proceso = true;

    //Llamada a la api por fetch

    fetch(this.url)
        .then(response => response.json())
        .then((data : ApiModels.RootObject) => {
          //debugger;
          this.myApiResponseData = data;
          this.proceso = false;
        })
  }

  next()
  {
    this.url = this.myApiResponseData.info.next;
    this.callMyApi();
    this.goTop();
  }

  previus()
  {
    this.url = this.myApiResponseData.info.prev;
    this.callMyApi();
    this.goTop();
  }

  goTop()   //Funionpara que una vez se pase de pagina se valla al top 
  {
    let top = document.getElementById('top');
    top.scrollIntoView();
  }

  
}

