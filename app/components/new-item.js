import {Component, Template} from 'angular2/angular2';
import {todoItems} from 'services/todoItems';

@Component({
	selector: 'new-item'
})
@Template({
	url: 'app/components/new-item.html'
})
export class NewItem {
	constructor() {
	}
	keyPressed($event, input) {
		if($event.which === 13) {
			this.addItem(input);
			input.value = '';
		}
	}
	addItem(input) {
		todoItems.push({
			text: input.value,
			completed: false
		})
		input.value = '';
	}
}

