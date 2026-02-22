import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './core/services/loading.service';
import { ScrollToTopComponent } from './shared/components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ScrollToTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('MilitaryHealth.UI');

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {
    document.body.dir = 'rtl';
  }
}
