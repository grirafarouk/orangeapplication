import { CampaignService } from './../campaign.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailcampaign',
  templateUrl: './detailcampaign.component.html',
  styleUrls: ['./detailcampaign.component.scss']
})
export class DetailcampaignComponent implements OnInit {

  constructor(private service:CampaignService, private active:ActivatedRoute) {

  }

  ngOnInit() {
let id=parseInt(this.active.snapshot.paramMap.get('id'));

this.service.find(id).subscribe(function(data){

console.log(data)


})


}

}
