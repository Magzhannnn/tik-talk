import { Component, inject, OnInit } from '@angular/core';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { ProfileService } from './data/services/profile.service';
import { CommonModule } from '@angular/common';
import { IProfile } from './data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  profileService = inject(ProfileService);
  profiles: IProfile[] = [];

  constructor() {}

  ngOnInit(): void {
    this.profileService.getTestAccounts().subscribe((value) => {
      this.profiles = value;
      this.profiles.forEach((item) => {
        item.stack.sort((a, b) => b.length - a.length);
      });
    });
  }
}
