import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss'],
})
export class SelectLocationComponent implements OnInit {

  isDrag: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isDrag = "y";
  }

doneButton(){
  this.router.navigate(['/dest']);
}

}
