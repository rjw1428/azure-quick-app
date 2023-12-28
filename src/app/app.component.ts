import { ChangeDetectionStrategy, Component, OnInit, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'quick-app';
  selectedDate = signal('');
  count = signal(0);
  error = signal(false);

  constructor() {
    effect(() => {
      console.log(`The count is ${this.count()}`)
    })    
  }

  onClick(input: HTMLInputElement) {
    if (!input.value) {
      console.log('error')
      this.error.set(true)
      return
    }

    this.error.set(false)
    this.selectedDate.set(input.value) // set value directly
    this.count.update(v => v + 1);  // compute update based on current value
  }
}
