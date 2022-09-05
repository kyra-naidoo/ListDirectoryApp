import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { fileInfo } from './models/FileInfo';

const Get_ListDirectory = gql`query ListDirectory($pathString: String!) {
  ListDirectory(pathString: $pathString) {
    FullPath
    name
    size
    exten
    type
    created
    access
    children
  }
}
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFileApp';
  resultInfo:fileInfo={
    FullPath: '',
    name: '',
    size: 0,
    exten: '',
    type: '',
    created: '',
    access: '',
    children: [""]
  } ;
  filePathStr:string='';
  secondStr:string='';
  constructor(private apollo:Apollo){

  }
  searchByPath(){
    this.apollo.watchQuery<any>({
      query:Get_ListDirectory,
      variables:{
        "pathString":this.filePathStr
      }
    }).valueChanges
    .subscribe(({data,loading}) =>{
      console.log(loading);
      this.resultInfo=data.ListDirectory;
    })
    
  }

  searchSecond(subfolderStr :string){
    this.apollo.watchQuery<any>({
      query:Get_ListDirectory,
      variables:{
        "pathString":subfolderStr
      }
    }).valueChanges
    .subscribe(({data,loading}) =>{
      console.log(loading);
      this.resultInfo=data.ListDirectory;
    })
  }
}
