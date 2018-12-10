import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class TaskService {

    constructor(private db: AngularFireDatabase) {
    }

    create(task) {
        return this.db.list('/tasks').push(task);
    }

    getAll() {
        return this.db.list('/tasks');
    }

    get(taskId) {
        return this.db.object('/tasks/' + taskId);
    }

    update(taskId, tasks) {
        return this.db.object('/tasks/' + taskId).update(tasks);
    }

    delete(taskId) {
        return this.db.object('/tasks/' + taskId).remove();
    }
}
