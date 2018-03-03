import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { ExperimentService } from '../../../../_services/experiment.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit, AfterViewInit {
    myExperiments: any;
    errorMessage: string;
    statusCompletedCnt: number = 0;
    statusRunningCnt: number = 0;
    statusConstructionCnt: number = 0;
    statusPlanningCnt: number = 0;
    statusBacklogCnt: number = 0;

    constructor(private _script: ScriptLoaderService, private _experimentService: ExperimentService, private _router: Router, private _snackbar: MatSnackBar) { }

    ngOnInit() {
        this._experimentService.getExperiments()
            .subscribe(
              myexperiments => {
                this.myExperiments = myexperiments;
                this.getExperimentCounts();
              },
              error => this.errorMessage = <any>error);
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-index',
            ['assets/app/js/dashboard.js']);

        Helpers.bodyClass('m-page--wide m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default');
    }

    getExperimentCounts() {
        this.myExperiments.forEach( value => {
            switch( value.status ) {
                case ('Completed'):
                    this.statusCompletedCnt = this.statusCompletedCnt + 1;
                    break;
                case ('Running'):
                    this.statusRunningCnt = this.statusRunningCnt + 1;
                    break;
                case ('Construction'):
                    this.statusConstructionCnt = this.statusConstructionCnt + 1;
                    break;
                case ('Planning'):
                    this.statusPlanningCnt = this.statusPlanningCnt + 1;
                    break;
                case ('Backlog'):
                    this.statusBacklogCnt = this.statusBacklogCnt + 1;
                    break;
                default:
            }
        });
    }

    filterExperimentByStatus(status) {
        this._experimentService.getExperimentsByFilter(status)
            .subscribe(
              myexperiments => {
                this.myExperiments = myexperiments;
               },
              error => this.errorMessage = <any>error);
    }

    filterExperimentBy(filterby, value) {
        this._experimentService.searchExperimentsByFilter( filterby + "=" + value)
        .subscribe(
            myexperiments => {
               
               if( myexperiments === false){
                let noExperiments = this._snackbar.open("No Experiments Found!", 'Close', { duration: 3000});
               } else {
                this.myExperiments = [];
                this.myExperiments.push( myexperiments );
               }
             },
            error => this.errorMessage = <any>error);
    }
}