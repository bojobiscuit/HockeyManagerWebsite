import { Component, OnInit } from '@angular/core';
import { PtHistoryDto } from 'src/app/dtos/pt-history-dto';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-pt-history',
  templateUrl: './pt-history.component.html',
  styleUrls: ['./pt-history.component.scss']
})
export class PtHistoryComponent implements OnInit {

  ptHistory: PtHistoryDto;

  constructor(private genService: GeneralService) { }

  ngOnInit() {
    this.ptHistory = this.genService.getPtHistoryDto();
  }
}
