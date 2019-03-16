import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ProfileDto } from 'src/app/dtos/profileDto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: ProfileDto;

  constructor(private genService: GeneralService) { }

  ngOnInit() {
    this.profile = this.genService.getProfileDto();
  }

}
