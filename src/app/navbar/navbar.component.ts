import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    
  }
  public sticky: boolean = false;
  ngOnInit(): void {
    
  }
  
  @HostListener('window:scroll',[])
  scroll(): void{
    if(window.scrollY > 0){
      this.sticky = true;
    }
    else{
      this.sticky = false;
    }
  }

}
