import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Fill} from './models/fill';

@Injectable()
export class FillService {

    constructor(private db: AngularFireDatabase) {
    }

    addToDay(task: Fill) {
        const item$ = this.db.object('/day-task/' + task.$key);
        item$.take(1).subscribe(() => {
            item$.set({task});
        });

    }

    createFinal(task) {
        return this.db.list('/one-day').push(task);
    }

    doneTsk(t: Fill, z: string) {
      return this.db.list('/one-day/' + t.$key + '/3').push(z);
    }
    // doneTsk(z) {
    //     this.db.list('/one-day' + '/done').push(z);
    // }

    getAllDay() {
        return this.db.list('/one-day');
    }

    async deleteFill() {
        this.db.object('/day-task/').remove();
    }

    getAllFill() {
        return this.db.list('/day-task');
    }
}
