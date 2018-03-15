import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import PouchDB from 'pouchdb';

import { Util } from '../../util';

import * as _ from 'lodash';

@Injectable()
export class AlunoPersistence {

  dbName: string = this.util.getStorage('usuarioId');

  db = new PouchDB<any>(`trainer-${this.dbName}`);

  constructor(private zone: NgZone, public util: Util) {
    this.db.sync(`http://localhost:5984/trainer-${this.dbName}`, { live: true, retry: true });
  }

  findAll() {
    return this.db.allDocs({ include_docs: true }).then(docs => docs.rows.map(row => row.doc));
  }

  create(aluno) {
    this.db.post(aluno);
  }

  bulk(alunos) {
    this.db.bulkDocs(alunos);
  }

  update(aluno) {
    this.db.put(aluno);
  }

  remove(aluno) {
    this.db.remove(aluno._id, aluno._rev);
  }

  truncate() {
    this.db.allDocs({ include_docs: true }).then(docs => docs.rows.map(row => this.db.remove(row.doc)))
  }

}
