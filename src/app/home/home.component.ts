import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {Subscription} from 'rxjs/Subscription';
import {Task} from '../models/task';
import {ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import {FillService} from '../fill.service';
import {Fill} from '../models/fill';
import {Day} from '../models/day';
import {map} from "rxjs/operators";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    title = 'minimalistic today-todo list';
    curDate = new Date().toLocaleDateString();
    id;
    forAdd = true;
    tasks1 = {
        task: null
    };
    tasks: Task[];
    fill: Fill[];
    day: Day[];
    subscription: Subscription;
    subscription_fill: Subscription;
    subscription_day: Subscription;

    constructor(private taskService: TaskService,
                private fillService: FillService,
                private router: Router,
                private route: ActivatedRoute) {
        this.subscription = this.taskService.getAll()
            .subscribe(tasks => this.tasks = tasks);
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) this.taskService.get(this.id).take(1).subscribe(t => this.tasks1 = t);
        this.subscription_fill = this.fillService.getAllFill()
            .subscribe(fill => this.fill = fill);
        this.subscription_day = this.fillService.getAllDay()
            .subscribe(day => this.day = day);
    }
    showBtns(wrap: HTMLElement) {
        wrap.classList.add('showBtns');
    }

    hideBtns(wrap: HTMLElement) {
        wrap.classList.remove('showBtns');
    }

    save(tasks) {
        if (this.id) this.taskService.update(this.id, tasks);
        else this.taskService.create(tasks);
        this.tasks1.task = '';
    }
    AddToTable(t: Fill) {
        this.fillService.addToDay(t);
        this.forAdd = false;
    }
    saveDay(form) {
        console.log(form);
        this.fillService.createFinal([this.fill, {date: ('0' + form.date.getDate()).slice(-2) + '.' +
        ('0' + (form.date.getMonth() + 1)).slice(-2) + '.' + form.date.getFullYear()}, {time: form.date.getTime()} ]);
        setTimeout(() => {
            this.fillService.deleteFill();
            this.forAdd = true;
        }, 100);
    }
    delete() {
        if (!confirm('Are you sure you want to delete this task?')) return;
        this.taskService.delete(this.id);
        this.router.navigate(['/']);
    }
    deleteFill() {
        if (!confirm('Are you sure you want to clear this tasks?')) return;
        this.fillService.deleteFill();
        setTimeout(() => {
            this.forAdd = true;
        }, 100);
    }
    activateClass(z) {
        z.active = true;
    }
    doneTask(t: Fill, z: string) {
        this.fillService.doneTsk(t, z);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription_fill.unsubscribe();
        this.subscription_day.unsubscribe();
    }

    ngOnInit() {
        // const today$ = this.tasks$.pipe(
        //     map(item => {
        //         return item.filter(i => i.date === today);
        //     })
        // );
    }

}
