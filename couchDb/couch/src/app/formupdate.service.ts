import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormupdateService {
  // person = [
  //   {
  //     fname: "Aji",
  //     lname: "Selvaraj"
  //   },
  //   {
  //     fname: "Sujatha",
  //     lname: "Selvaraj"
  //   }
  // ]
  public endpt = "https://8ca8138b-1aac-430a-8325-3a686242a515-bluemix.cloudant.com/";
  public password = "f56766c5716a7b37a531aaa7bdb53315";
  public username = "apikey-v2-1xzbb618xtgfg14nm7uasm9coajsc9dzzpg8p57atbtg";
  httpOptions: { headers?: HttpHeaders | { [header: string]: string | string[]; } | undefined; observe?: "body" | undefined; params?: HttpParams | { [param: string]: string | string[]; } | undefined; reportProgress?: boolean | undefined; responseType: "arraybuffer"; withCredentials?: boolean | undefined; } | undefined;


  constructor(private http: HttpClient) { }


  postDetails(formValues: any, db: any) {

    const url = this.endpt + db;
    const basicAuth = 'Basic ' + btoa(this.username + ':' + this.password);
    return this.http.post(url, formValues, { headers: { Authorization: basicAuth } });
  }
  getAllDetails(formValues: any, db: any) {

    const url = this.endpt + db + "/_all_docs?include_doc=true";
    const basicAuth = 'Basic ' + btoa(this.username + ':' + this.password);
    return this.http.get(url, { headers: { Authorization: basicAuth } });
  }
  getDetailByID(formValues: any, db: any, id: any) {

    const url = this.endpt + db + "/" + id;
    const basicAuth = 'Basic ' + btoa(this.username + ':' + this.password);
    return this.http.get(url, { headers: { Authorization: basicAuth } });
  }
  updateData(changedValue: any, db: any, db_id: any, db_rev: any) {

    const basicAuth = 'Basic ' + btoa(this.username + ':' + this.password);
    const database = db;
    const id = db_id;
    const rev = db_rev;
    const changeObj = changedValue;
    const url = this.endpt + db + "/" + id + '/?rev=' + rev;
    return this.http.put(url, changeObj, { headers: { Authorization: basicAuth } });
  }
  // updateData(formValues: any, db: any, id: any, rev: any, changedValue: any) {
  //   const url = this.endpt + db + "/" + id;
  //   const basicAuth = 'Basic ' + btoa(this.username + ':' + this.password);
  //   return this.http
  //     .put(
  //       url,
  //       JSON.stringify(changedValue)
  //     )
  // }

}
