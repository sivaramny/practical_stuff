/// <reference path="typings/angular2/angular2.d.ts" />
class MyAppComponent {
    name: string;
    constructor() {
    	this.name = 'Alice';
    }
}
// Annotation section
@Component({
	selector: 'my-app'
})
@View({
	template: '<h1>Hello {{ name }}</h1>'
})
// Component controller
class MyAppComponent {
	name: string;
	constructor() {
		this.name = 'Alice';
	}
}

@Component({
    selector: 'my-app' // Defines the <my-app></my-app> tag
})
@View({
    template: '<h1>Hello {{ name }}</h1>' // Defines the inline template for the component
})

bootstrap(MyAppComponent);