import { PointHistoryItem } from './point-history-item';
import { Pagination } from './pagination';

export class PtHistoryDto {
    pointsTotal: number;
    pointsAvailable: number;
    pointHistoryItems: PointHistoryItem[];
    pagination: Pagination;
}
