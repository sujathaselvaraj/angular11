import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import PouchFind from 'pouchdb-find';

import PouchDB from 'pouchdb';
import { ReferenceService } from '../reference.service';
PouchDB.plugin(PouchFind);

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  remote: any;
  private db;

  dbconfig = { remoteDbUrl: "", databaseName: "", username: "", password: "" }
  constructor(public http: HttpClient, public ref: ReferenceService) {
    this.dbconfig.remoteDbUrl = "http://192.168.57.254:5984/"
    this.dbconfig.databaseName = "bus_booking_shyam/"
    this.dbconfig.username = "datauser"
    this.dbconfig.password = "dtausr123"
    this.initializePouchDb();

  }


  initializePouchDb() {
    // if (navigator.onLine) {  
    this.remote = this.dbconfig.remoteDbUrl + this.dbconfig.databaseName;
    // couch authentication
    this.db = new PouchDB(this.remote, {
      auth: { "username": this.dbconfig.username, "password": this.dbconfig.password }
    });



  }
  creatindex() {
    this.db.createIndex({
      index: {
        fields: ['data.type']
      }
    }).then(function (result) {
      console.log('createIndex ' + result);

    }).catch(function (err) {
      console.log('createIndex ' + err);
    });
  }
  busdata(){
      console.log("showTodos");

    return  this.db.find({
        selector: { data:{type: 'bus'} },

      }).then(function (result) {
        console.log(result);
        return  result ;
        // handle result
      }).catch(function (err) {
        console.log(err);
      });
      //   this.db.get('bus').then(function (doc) {
      //     // handle doc
      //     console.log(doc);
      //     datas(doc)
      //   }).catch(function (err) {
      //     console.log(err);
      //   });

  

  }

  putdata(dats) {
    console.log(dats, "dats");
    this.db.bulkDocs(
      dats
    ).then(function (response) {
      console.log(response, "response");
      // handle response
    }).catch(function (err) {
      console.log(err, "putdata");
    });
  }
  putonedata(dats)  : Promise<any> {
    return new Promise((datas) => {
    console.log(dats, "dats");
    this.db.post(
      {data:dats}
    ).then(function (response) {
      console.log(response, "response");
      datas(true);
      // handle response
    }).catch(function (err) {
      console.log(err, "putdata");
    });
  });
  }
  booktic(data) {
    this.db.put({
      _id: 'book_tic',
      data: data
    }).then(function (response) {
      // handle response
    }).catch(function (err) {
      console.log(err);
    });
  }
  update(data) : Promise<any> {
    return new Promise((datas) => {
    this.db.put(data).then(function (response) {
      // handle response
      datas(true)
    }).catch(function (err) {
      console.log(err);
    });
  });
  }
  delete(id, rev): Promise<any> {
    return new Promise((datas) => {
    this.db.remove(id, rev, function (err) {
      if (err) {
        return console.log(err);
      } else {
        datas(true)
        console.log("Document deleted successfully");
      }
    });
  });
  }
}
