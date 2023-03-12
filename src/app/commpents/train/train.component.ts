import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ItemStatus } from 'src/app/model/enum';


@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {


  // response : Array[];
  //  response : Array[string] ;
  // response [] = [];
  response: Array<any> = [];


  dataSource: any;
  displayedColumns: string[] = ['id', 'title', 'edit'];
  constructor(private dataService: DataService) {

  }

  async ngOnInit() {
    let response = await this.dataService.updateData(); 
    console.log('response' , response); 
    await this.getData();

  }

  edit(row: any) {
    debugger;
    row.editable = true;
    console.log('row', row);
  }

  async getData() {
    debugger;
    this.response = await this.dataService.getData();
    console.log('response', this.response);
    //  Information
    this.response = this.response.map(item => {
      return {
        id: item.id,
        title: item.title,
        status: ItemStatus.EDIT
      }
    })
    this.dataSource = new MatTableDataSource<any>(this.response);

    //  this.dataSource = this.response; 
    console.log('response', this.response);
  }

  saveRow(row: any){

  }

}
