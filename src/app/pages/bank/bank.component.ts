import { Component, OnInit } from '@angular/core';
import { BankDto } from 'src/app/dtos/bank-dto';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  bank: BankDto;

  constructor(private genService: GeneralService) { }

  ngOnInit() {
    this.bank = this.genService.getBankDto();
  }
}
