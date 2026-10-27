import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  titulo = input<string>("4VPizzeria");
  
  
}
