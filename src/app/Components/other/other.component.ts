import { Component } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent {
  divWidth = 300;
  divHeight = 50;
  divLeft = 0;
  divTop = 520;
  isDragging = false;
  ballVisible = true;
  onMouseDown(event: MouseEvent): void {
  this.isDragging = true;
}

onMouseMove(event: MouseEvent): void {
  if (this.isDragging) {
    this.divLeft = event.clientX - this.divWidth / 2;
  }
  
}

onMouseUp(): void {
  this.isDragging = false;
}

onTouchStart(event: TouchEvent): void {
  this.isDragging = true;
  // Prevent the default behavior to avoid interference with dragging
  event.preventDefault();
}

onTouchMove(event: TouchEvent): void {
  if (this.isDragging) {
    // Use the first touch position for simplicity, you may adjust based on your needs
    const touch = event.touches[0];
    this.divLeft = touch.clientX - this.divWidth / 2;
    //this.divTop = touch.clientY - this.divHeight / 2;
  }
}

onTouchEnd(): void {
  this.isDragging = false;
}

}
