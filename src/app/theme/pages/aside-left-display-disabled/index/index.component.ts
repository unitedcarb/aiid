import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { ExperimentService } from '../../../../_services/experiment.service';
import { Router } from '@angular/router';


@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit, AfterViewInit {
    myExperiments: any;
    errorMessage: string;
    statusCompletedCnt: number;
    statusRunningCnt: number;
    statusConstructionCnt: number;
    statusPlanningCnt: number;
    statusBacklogCnt: number;

    constructor(private _script: ScriptLoaderService, private _experimentService: ExperimentService, private _router: Router) { }

    ngOnInit() {
        this._experimentService.getExperiments()
            .subscribe(
              myexperiments => {
                this.myExperiments = myexperiments;
              },
              error => this.errorMessage = <any>error);
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-index',
            ['assets/app/js/dashboard.js']);

        Helpers.bodyClass('m-page--wide m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default');

    }

}