import { IProfile } from './../../data/interfaces/profile.interface';
import { ProfileCardComponent } from './../../common-ui/profile-card/profile-card.component';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCardComponent, CommonModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent implements OnInit {
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
