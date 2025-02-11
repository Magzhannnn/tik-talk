import { Component, Input } from '@angular/core';
import { SkillTagComponent } from '../skill-tag/skill-tag.component';
import { IProfile } from '../../data/interfaces/profile.interface';
import { ImageUrlPipeTsPipe } from "../../helpers/pipes/image-url.pipe.ts.pipe";

@Component({
  selector: 'app-profile-card',
  imports: [SkillTagComponent, ImageUrlPipeTsPipe],
  standalone: true,
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() profile!: IProfile;
}
