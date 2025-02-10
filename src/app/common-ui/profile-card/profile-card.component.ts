import { Component } from '@angular/core';
import { SkillTagComponent } from '../skill-tag/skill-tag.component';

@Component({
  selector: 'app-profile-card',
  imports: [SkillTagComponent],
  standalone: true,
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {}
