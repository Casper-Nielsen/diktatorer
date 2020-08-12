import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Diktatorer } from '../diktatorer'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-formsthing',
  templateUrl: './formsthing.component.html',
  styleUrls: ['./formsthing.component.scss']
})
export class FormsthingComponent implements OnInit {

  diktatorers : Diktatorer[] = [];
  diktatorerneData:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.update();
  }

  update(){
    this.diktatorerneData = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      date: new FormControl(),
      date1: new FormControl()
   })
  }

  onSubmit() {
    
    let diktatorer : Diktatorer = new Diktatorer(this.diktatorerneData.get('firstName').value, this.diktatorerneData.get('lastName').value );
    diktatorer.date = this.diktatorerneData.get('date').value;
    diktatorer.date1 = this.diktatorerneData.get('date1').value;
    diktatorer.dead = diktatorer.date1 > diktatorer.date;
    this.diktatorers[this.diktatorers.length] = diktatorer;
    this.update();
    console.log("new diktatorer");
 }
 remove(index : number){
  this.diktatorers.splice(index,1);
 }
}
