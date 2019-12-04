import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loged:boolean=true;
  signForm:FormGroup;
  constructor(private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {}
  
    app()
    {
      this.router.navigate(['./acceuil']);
    }
  

}
