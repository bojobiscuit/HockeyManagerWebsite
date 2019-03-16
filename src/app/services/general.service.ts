import { Injectable } from '@angular/core';
import { ProfileDto } from '../dtos/profileDto';
import { Observable } from 'rxjs';
import { Attribute } from '@angular/compiler';
import { UpdateDto } from '../dtos/update-dto';
import { UpdateSubmission } from '../dtos/update-submission';
import { BankDto } from '../dtos/bank-dto';
import { PtHistoryDto } from '../dtos/pt-history-dto';
import { PtActiveDto } from '../dtos/pt-active-dto';
import { Pagination } from '../dtos/pagination';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  getProfileDto(): ProfileDto {
    var dto = new ProfileDto;
    dto.playerName = "Bojo Biscuit";
    dto.playerPosition = "Defender";
    dto.playerArchtype = "Defensive Defender";
    dto.team = "West Kendall Platoon";
    dto.draftSeason = 20;
    dto.bankBalance = 69000000;
    dto.pointsTotal = 1600;
    dto.pointsAvailable = 69;
    dto.attributes = [
      { attName: "Checking", attValue: 43 },
      { attName: "Fighting", attValue: 25 },
      { attName: "Discipline", attValue: 62 },
      { attName: "Skating", attValue: 80 },
      { attName: "Strength", attValue: 57 },
      { attName: "Endurance", attValue: 52 },
      { attName: "Puck Handling", attValue: 71 },
      { attName: "Face Offs", attValue: 40 },
      { attName: "Passing", attValue: 75 },
      { attName: "Scoring", attValue: 65 },
      { attName: "Defense", attValue: 80 },
      { attName: "Penalty Shot", attValue: 40 },
    ];;

    return dto;
  }

  getUpdateDto(): UpdateDto {
    var dto = new UpdateDto;
    dto.pointsTotal = 1600;
    dto.pointsAvailable = 69;
    dto.attributes = [
      { attName: "Checking", attValue: 43 },
      { attName: "Fighting", attValue: 25 },
      { attName: "Discipline", attValue: 62 },
      { attName: "Skating", attValue: 80 },
      { attName: "Strength", attValue: 57 },
      { attName: "Endurance", attValue: 52 },
      { attName: "Puck Handling", attValue: 71 },
      { attName: "Face Offs", attValue: 40 },
      { attName: "Passing", attValue: 75 },
      { attName: "Scoring", attValue: 65 },
      { attName: "Defense", attValue: 80 },
      { attName: "Penalty Shot", attValue: 40 },
    ];
    dto.submission = new UpdateSubmission;
    dto.submission.attributeUpdates = [
      { attName: "Checking", attPrevValue: 43, attNextValue: 45, attCost: 2 },
      { attName: "Puck Handling", attPrevValue: 71, attNextValue: 75, attCost: 16 },
    ];
    dto.submission.cost = 18;
    dto.submission.valueDifference = 6;

    return dto;
  }

  getBankDto(): BankDto {
    var dto = new BankDto;
    dto.bankBalance = 69000000;
    dto.historyItems = [
      { name: "Weekly Training", date: "3/10/19", amount: 1000000 },
      { name: "Weekly Training", date: "3/10/19", amount: 500000 },
      { name: "Weekly Training", date: "3/10/19", amount: 1000000 },
      { name: "Bank Manager", date: "3/1/19", amount: 4000000 },
    ];
    dto.pagination = new Pagination;
    dto.pagination.currentPage = 1;
    dto.pagination.totalPages = 3;
    dto.pagination.pageSize = 10;

    return dto;
  }

  getPtHistoryDto(): PtHistoryDto {
    var dto = new PtHistoryDto;
    dto.pointsTotal = 1600;
    dto.pointsAvailable = 69;
    dto.pointHistoryItems = [
      { name: "Activity Check 205", date: "3/15/19", amount: 2 },
      { name: "Weekly Training", date: "3/15/19", amount: 5 },
      { name: "PT 3: Flerp Derp", date: "3/15/19", amount: 3 },
      { name: "Milestones", date: "3/15/19", amount: 6 },
      { name: "Activity Check 204", date: "3/15/19", amount: 2 },
      { name: "Weekly Training", date: "3/15/19", amount: 5 },
      { name: "Activity Check 203", date: "3/15/19", amount: 2 },
      { name: "Weekly Training", date: "3/15/19", amount: 5 },
      { name: "Activity Check 202", date: "3/15/19", amount: 2 },
      { name: "Weekly Training", date: "3/15/19", amount: 5 },
    ];
    dto.pagination = new Pagination;
    dto.pagination.currentPage = 1;
    dto.pagination.totalPages = 3;
    dto.pagination.pageSize = 10;

    return dto;
  }

  getPtActiveDto(): PtActiveDto {
    var dto = new PtActiveDto;
    dto.pointTasks = [ "PT3: Flerp McDerp", "Milestones" ];
    dto.activityCheckNumber = 255;
    dto.activityCheckComplete = false;
    dto.trainingDate = "3/11";
    dto.trainingOptions = [ "5 points", "3 points", "1 point" ];
    dto.trainingComplete = false;
    return dto;
  }

}
