import { Campaign } from './Campaign';
import { gift } from './gift';
export class spin_destination {
    created_at:string
    id_spin_dest: number;
    campaign_id: Campaign;
    msisdn: number;
    reserve: number;
    result_text: String;
    spin_number: number;
    token: String;
    value: String;
    win: number;
    gift_id: gift;
    ccs_id:number
}