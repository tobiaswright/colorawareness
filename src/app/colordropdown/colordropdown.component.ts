import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-colordropdown',
  templateUrl: './colordropdown.component.html',
  styleUrls: ['./colordropdown.component.css']
})
export class ColordropdownComponent implements OnInit {
  colorList: any = []
  selectedColor: string = ""

  constructor(private data:DataService, private router: Router) {



   }

  ngOnInit(): void {
    let colorList = this.data.getMap();

    this.colorList = colorList.sort( (a:any,b:any) => {
      let x = a.displayName.toLowerCase();
	    let y = b.displayName.toLowerCase();
      return x.localeCompare(y)
    })
  }

  filterColor() {
    console.log(this.selectedColor)
    this.router.navigate( [this.selectedColor] );
  }

}