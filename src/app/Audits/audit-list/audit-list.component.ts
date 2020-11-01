
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { AuditService } from '../audit/audit.service';
import { AuditListService } from '../audit-list.service';


@Component({
    selector : 'audits',
    //template : '<h2>{{title + " for " + getAuditingOrg()}}</h2>'
    /*template : `<h2>{{title + " for " + getAuditingOrg()}}</h2>
                <ul>
                    <li *ngFor="let audit of audits"> 
                        {{ audit }}
                    </li>
                </ul>
                <div (click)="onDivClick()">
                <!--input (keyup)="onKeyUp($event)" /-->
                <input [value]="firmName" (keyup.enter)="onKeyUp($event)" />
                <p>
                <input name="i1" #email (keyup.enter)="onEmailEntered(email.value)" />
                <p>
                <input name="i2" [(ngModel)]="firmName" (keyup.enter)="onKeyUp1()"/>
                <button  (click)="onSave($event)" class="btn btn-primary">Create New Portfolio</button>
                </div>
                `*/
        templateUrl : "./audit-list.component.html"
})

export class AuditListComponent implements OnInit {
    firmName = "E&Y";
    title = " List of Audits";
    private auditFirmName = "Earnest & Young";
    audits: any[] ;//= ["audit1", "audit2", "audit3"];
    
    constructor(private auditsService: AuditListService)
    {
        //let auditsService = new AuditsService();
        //this.audits = auditsService.getAudits();
       
    }

    ngOnInit()
    {
        this.auditsService.GetAll().subscribe(x=>{
            this.audits = x;
        })
        
    }

    getAuditingOrg()
    {
        return this.auditFirmName;
    }

    download( docName: string): void
  {
    window.open("https://auditstoragev1.blob.core.windows.net/auditcontainer/"+docName);
  }

}