import { Component } from '@angular/core';

import { CustomerComponent } from './customer/customer.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomerComponent]
})

export class AppComponent {
    // [ ] means property binding
    // ( ) means event binding

    title = 'Customer App';
    name = 'Chris';
    myColor = 'green';

    customers = [
        { id: 1, name: 'Ward' },
        { id: 2, name: 'John' },
        { id: 3, name: 'Sally' },
        { id: 4, name: 'Chris' },
        { id: 5, name: 'Emmet' }
    ];

    changeColor() {
        this.myColor = this.myColor === 'green' ? 'red' : 'green';
    }
}
