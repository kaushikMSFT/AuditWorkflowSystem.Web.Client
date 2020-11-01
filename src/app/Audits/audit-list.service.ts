import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuditPortfolio } from '../shared/audit.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuditListService {
  baseUrl="https://clientapiv1.azurewebsites.net";//"https://localhost:5001";//https://clientapiv1.azurewebsites.net
  constructor(private httpService: HttpClient) { }

  GetAll(): Observable<AuditPortfolio[]>
  {
     let audits: AuditPortfolio[]=[];
     let audit: AuditPortfolio;
    //return this.httpService.get<AuditPortfolio[]>("https://localhost:5001/api/auditportfolio");
     return this.httpService.get<any[]>(`${this.baseUrl}/api/auditPortfolio`).pipe(map((data)=>{
        console.log(data);
        for(let i=0;i<data.length;i++)
        {
          audit=new AuditPortfolio();
          audit.AuditCode=data[i].auditPortfolioId;
          audit.AuditorFirm=data[i].auditorFirmId;
          audit.ClientFirm=data[i].clientId;
          audit.Description=data[i].description;
          audit.ReleaseDate=data[i].reportReleaseDate;
          audit.Document=data[i].document;
          audits.push(audit);
        }
        console.log("audits", audits, data,audits[0].AuditCode);
        return audits;
     }));
        
  }
}
