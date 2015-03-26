import {Component, Template, For, If} from 'angular2/angular2';
import {todoItems} from 'services/todoItems';

@Component({
	selector: 'todo-list'
})
@Template({
	url: 'app/components/todo-list.html',
	directives: [For, If]
})
export class TodoList {
	constructor() {
		this.items = todoItems;
	}
	setCompleted(item, chkbox) {
		item.completed = chkbox.checked;
		console.log(item);
	}
	completeAll() {
		todoItems.forEach(function(item) {
			item.completed = true;
		})
		console.log(todoItems);
	}
	removeItem(item) {
		todoItems.splice(todoItems.indexOf(item), 1);
	}
	hoveringOver(item) {
		return this.hoveredItem === item;
	}
	hover(item) {
		this.hoveredItem = item;
		console.log(item);
	}
	leave(item) {
		if(this.hoveredItem === item) {
			this.hoveredItem = null;
		}
	}
}

