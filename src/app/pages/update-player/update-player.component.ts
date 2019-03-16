import { Component, OnInit } from '@angular/core';
import { UpdateDto } from 'src/app/dtos/update-dto';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.scss']
})
export class UpdatePlayerComponent implements OnInit {

  update: UpdateDto;
  pointsUsed: number = 0;

  constructor(private genService: GeneralService) { }

  ngOnInit() {
    this.update = this.genService.getUpdateDto();
  }

}
