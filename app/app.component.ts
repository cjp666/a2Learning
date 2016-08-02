import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    // [ ] means property binding
    // ( ) means event binding

    title = 'Customer App';
    name = 'Chris';
    myColor = 'green';

    changeColor() {
        this.myColor = this.myColor === 'green' ? 'red' : 'green';
    }
}
