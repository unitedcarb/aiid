import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { FeatureService } from '../../../_services/feature.service';
import { IFeature } from '../../../features';
declare let mLayout: any;

@Component({
    selector: "app-aside-nav",
    templateUrl: "./aside-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {
    features: IFeature[];
    myfeatures: any;
    errorMessage: string;
   

    constructor(private _featureService: FeatureService) { }

    ngOnInit() {
       this._featureService.getSidebarFeatures()
          .subscribe(
            myfeatures => {
              this.myfeatures = myfeatures;
            },
            error => this.errorMessage = <any>error);
    }
    
    ngAfterViewInit() {
        mLayout.initAside();
       
    }
  

}