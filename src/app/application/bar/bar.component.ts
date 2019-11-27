import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
show:boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  log()
  {
    this.router.navigate(['./login']);
  }
  rechercher()
  {
    this.router.navigate(['./recherche']);
  }
}
