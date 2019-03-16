import { Attribute } from './attribute';
import { AttributeUpdate } from './attribute-update';
import { UpdateSubmission } from './update-submission';

export class UpdateDto {
    pointsTotal: number;
    pointsAvailable: number;
    attributes: Attribute[];
    submission: UpdateSubmission;    
}
