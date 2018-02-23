import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class TaskService {

    constructor(private db: AngularFireDatabase) {
    }

    create(task) {
        return this.db.list('/tasks').push(task);
    }
}
