import { Attribute } from './attribute';

export class ProfileDto {
    playerName: string;
    playerPosition: string;
    playerArchtype: string;
    team: string;
    draftSeason: number;
    pointsTotal: number;
    pointsAvailable: number;
    bankBalance: number;
    attributes: Attribute[];
}
