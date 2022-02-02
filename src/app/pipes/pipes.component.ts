import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
searchItem;
  constructor() { }

  ngOnInit(): void {
  }
empData=[{
  empName : "teja",
  empSal : 50000,
  DOB : "11/11/96",
  Designation : "Developer"
},
{
empName : "pooja",
empSal : 50000,
DOB : "26/6/97",
Designation : "Scientist"
},
{
empName : "venky",
empSal : 50000,
DOB : "3/12/98",
Designation : "Doctor"
},
]
}
