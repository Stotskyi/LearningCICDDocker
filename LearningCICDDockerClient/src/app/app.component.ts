import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  stringResponse: string | undefined;

  constructor(private apiService: ApiService) {}
    
  ngOnInit(): void {
    this.fetchStringData();
  }

    fetchStringData(): void {
      this.apiService.getData().subscribe(data => {
        this.stringResponse = data;
        console.log(this.stringResponse);
      });
  }
}
