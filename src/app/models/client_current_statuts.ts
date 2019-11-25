import { gift_type } from './gift_type';

export class client_current_statuts {
    id:number;
    capping_win_days: number;
    contact_number: number;
    last_spin_date: Date;
    spins_remaining_today: number;
    staff: number;
    win: number;
    win_date: Date;
    gift_type_id: gift_type ;

}