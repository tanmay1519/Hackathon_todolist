import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  taskname:string=""
  taskList:any = [];
  constructor() { 
   
  }

  public run () {
    
    if (this.taskname != null) {
      let repeat=false;
      for (let i=0;i<this.taskList.length;i++){
        if (this.taskname==this.taskList[i].name)
        {
          repeat = true;
          break;
        }
        
      }
      if (!repeat){
      let  temp = this.taskList
      temp.push({
         name:this.taskname,
         status:"No",
         val:false
       })
       this.taskList=temp;
      //  this.taskname="";
      }
    }
  
    else {
      // alert("Please mention Task Name")
    }
    

  }
  public Change (value:string) {
    this.taskname = value 
  }
  public checked (val:string,index:number){
    // let val:string;
    // if (newval=="on"){
    //   let temp = this.taskList ;

    //   temp[index].val="off"

    // }
    // else{
     
    //   let temp = this.taskList ;

    //   temp[index].val="on"
    // }
val=this.taskList[index].status
   if (val=="No"){
      let temp = this.taskList ;
      temp[index].status="Yes"


   }
   if (val=="Yes"){
    let temp = this.taskList ;
    temp[index].status="No"

 }
  }

  ngOnInit(): void {
  }

}
