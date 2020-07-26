import { Component, ViewChild } from '@angular/core';
import { DataDummyService } from '../data-dummy.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  status = false;
  current  = 0;
  data=null;
  constructor(private dataS:DataDummyService) {
    this.data = this.dataS.getData();
  }

  onClickActive = (x)=>{
  this.status = !this.status;
  this.current = x;
  }

}

