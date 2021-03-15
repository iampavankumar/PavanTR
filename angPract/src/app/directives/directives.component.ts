import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  addEmp() {
    alert('working');
    this.employees.unshift({
      empID: 167,
      empName: 'Anumpama',
      empImg:
        'https://starsunfolded.com/wp-content/uploads/2018/06/Anupama-Parameswaran.jp',
      empSal: '100000',
      empComp: 'TFI',
      empLoc: 'Hyd',
      empDOJ: new Date('12/12/17'),
      empDest: 'Actress',
      EmpEdu: 'MCA',
      EmpCol: 'google',
    });
  }
  employees = [
    {
      empID: 1,
      empName: 'Anu',
      empImg:
        'https://cdn.pixabay.com/photo/2017/06/22/23/10/landscapes-2432882__340.jpg',
      empSal: '3LPA',
      empComp: 'Jspiders',
      empLoc: 'Hyd',
      empDOJ: new Date('12/12/2017'),
      empDest: 'Devops',
      empEdu: 'B.Tech',
      empCol: 'Sk University',
    },
    {
      empID: 121,
      empName: 'manu',
      empImg:
        'https://cdn.pixabay.com/photo/2017/06/22/23/10/landscapes-2432882__340.jpg',
      empSal: '5LPA',
      empComp: 'Oracle',
      empLoc: 'Mumbai',
      empDOJ: new Date('12/12/17'),
      empDest: 'React',
      EmpEdu: 'msc',
      EmpCol: 'SVNE',
    },
    {
      empID: 143,
      empName: 'Prasanth',
      empImg:
        'https://cdn.pixabay.com/photo/2017/06/22/23/10/landscapes-2432882__340.jpg',
      empSal: '9LPA',
      empComp: 'Finistra',
      empLoc: 'Bamgalore',
      empDOJ: new Date('12/12/17'),
      empDest: 'Automation',
      EmpEdu: 'B.Tech',
      EmpCol: 'JNTUK',
    },
    {
      empID: 167,
      empName: 'Nani',
      empImg:
        'https://cdn.pixabay.com/photo/2017/06/22/23/10/landscapes-2432882__340.jpg',
      empSal: '100000',
      empComp: 'TFI',
      empLoc: 'Hyd',
      empDOJ: new Date('12/12/17'),
      empDest: 'Actor',
      EmpEdu: 'MCA',
      EmpCol: 'Cafe SHop',
    },
    {
      empID: 1510417,
      empName: 'manu',
      empImg:
        'https://cdn.pixabay.com/photo/2017/06/22/23/10/landscapes-2432882__340.jpg',
      empSal: '5LPA',
      empComp: 'Oracle',
      empLoc: 'Mumbai',
      empDOJ: new Date('12/12/17'),
      empDest: 'React',
      EmpEdu: 'msc',
      EmpCol: 'SVNE',
    },
  ];

  users = [];
  removeEmp(emp:any){
   
    let index=this.employees.indexOf(emp);
    console.log(index);
    this.employees.splice(index,1);
    
  }

  // color='red';
  color="black";
}
