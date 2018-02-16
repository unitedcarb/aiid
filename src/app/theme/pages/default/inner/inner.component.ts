import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { FeatureService } from '../../../../_services/feature.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IFeature } from '../../../../features';

@Component({
    selector: "app-inner",
    templateUrl: "./inner.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class InnerComponent implements OnInit, AfterViewInit {
    id: number; 
    myfeatures: any;
    errorMessage: string;
    currentFeature: IFeature;

    constructor(private _script: ScriptLoaderService, private _router: Router,
        private _featureService: FeatureService, private _route: ActivatedRoute ) { }


    ngOnInit() {
       
            this._route.params.subscribe(params=> {
                 this.id = +params['id'];
                 this.getFeatureDetails();
                });
            
            
            this._featureService.getFeatures()
            .subscribe(
              myfeatures => {
                this.myfeatures = myfeatures;
              },
              error => this.errorMessage = <any>error);
  
    }


    ngAfterViewInit() {
        this._script.loadScripts('app-inner',
            ['assets/app/js/dashboard.js']);

    }

    getFeatureDetails(): void {
        this._featureService.getFeature(this.id)
            .subscribe(
                currentFeature => {
                    this.currentFeature = currentFeature;
                } 
            )
       }
}