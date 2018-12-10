import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../task.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
    selector: 'app-plan-form',
    templateUrl: './plan-form.component.html',
    styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent implements OnInit {
    tasks = {
        task: null,
        priority: null,
        comment: null
    };
    id;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private taskService: TaskService) {
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) this.taskService.get(this.id).take(1).subscribe(t => this.tasks = t);
    }

    save(tasks) {
        if (this.id) this.taskService.update(this.id, tasks);
        else this.taskService.create(tasks);

        this.router.navigate(['/']);
    }

    delete() {
        if (!confirm('Are you sure you want to delete this task?')) return;
        this.taskService.delete(this.id);
        this.router.navigate(['/']);
    }

    ngOnInit() {
    }

}
