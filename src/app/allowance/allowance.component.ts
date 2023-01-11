import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.css']
})
export class AllowanceComponent {

  @Input() allowance_receive:any
  
  ngOnInit(){
    console.log(this.allowance_receive)
  }
}
