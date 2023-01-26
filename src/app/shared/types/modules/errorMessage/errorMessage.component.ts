import { Component, Input } from "@angular/core";

@Component({
    selector: 'mc-error',
    template: '<div>{{messageProps}}</div>'
})
export class ErrorMessageComponent {
    @Input('message') messageProps: string = 'Something went wrong'
}