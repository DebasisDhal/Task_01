import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wfh';
  showBox1: boolean = true;
  showBox2: boolean = false;
  showBox3: boolean = true;
  showBox4: boolean = false;
  showBox5: boolean = true;
  showBox6: boolean = false;

  toggleBoxes(clickedBox: number): void {
    // Hide all boxes initially
    this.showBox1 = false;
    this.showBox2 = false;
    this.showBox3 = false;
    this.showBox4 = false;
    this.showBox5 = false;
    this.showBox6 = false;

   
    if (clickedBox === 1) {
      this.showBox2 = true;
      this.showBox3 = true;
      this.showBox5 = true;
    }else if (clickedBox === 2) {
      this.showBox1 = true;
      this.showBox3 = true;
      this.showBox5 = true;
    } else if (clickedBox === 3) {
      this.showBox1 = true;
      this.showBox4 = true;
      this.showBox5 = true;
    } else if (clickedBox === 4) {
      this.showBox1 = true;
      this.showBox3 = true;
      this.showBox5 = true;
    }else if (clickedBox === 5) {
      this.showBox1 = true;
      this.showBox3 = true;
      this.showBox6 = true;
    } else if (clickedBox === 6) {
      this.showBox1 = true;
      this.showBox3 = true;
      this.showBox5 = true;
    }
  }
}
