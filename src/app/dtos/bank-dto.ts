import { BankHistoryItem } from './bank-history-item';
import { Pagination } from './pagination';

export class BankDto {
    bankBalance: number;
    historyItems: BankHistoryItem[];
    pagination: Pagination;
}
