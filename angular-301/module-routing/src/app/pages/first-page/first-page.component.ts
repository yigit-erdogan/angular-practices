import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {

  constructor(private route:Router, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void
  {
    let page = this.activatedRoute.snapshot.queryParamMap.get('page');
    let pageSize = this.activatedRoute.snapshot.queryParamMap.get('pageSize');

    console.log(`page: ${page} / pageSize: ${pageSize}`);

    this.activatedRoute.queryParamMap.subscribe(x =>
    {
      console.log(`Dynamic page: ${x.get("page")} / pageSize: ${x.get("pageSize")}`);
    })

  }

  changeQueryParams()
  {
    this.route.navigate(['firstpage'],{queryParams:{page:10,pageSize:20}});
  }

  goSecondPage()
  {
    this.route.navigateByUrl("secondpage");
    // this.route.navigateByUrl(`secondpage/${5}`);
    // this.route.navigate(['secondpage',5])
  }

}
