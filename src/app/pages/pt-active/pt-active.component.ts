import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { PtActiveDto } from 'src/app/dtos/pt-active-dto';

@Component({
  selector: 'app-pt-active',
  templateUrl: './pt-active.component.html',
  styleUrls: ['./pt-active.component.scss']
})
export class PtActiveComponent implements OnInit {

  ptActive: PtActiveDto;

  constructor(private genService: GeneralService) { }

  ngOnInit() {
    this.ptActive = this.genService.getPtActiveDto();
  }
}
