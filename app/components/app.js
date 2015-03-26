import {Component, Template, bootstrap} from 'angular2/angular2';
import {NewItem} from 'components/new-item';
import {TodoList} from 'components/todo-list';

@Component({
	selector: 'todo-app'
})
@Template({
	url: 'app/components/app.html',
	directives: [NewItem, TodoList]
})
export class TodoApp {
	constructor() {
	}
}

bootstrap(TodoApp);