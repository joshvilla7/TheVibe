import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ArticleInputInterface } from "src/app/shared/types/articleInputInterface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { createArticleAction } from "../store/actions/createArticle.action";
import { isSubmittingSelector, validationErrorsSelector } from "../store/selectors";

@Component({
    selector: 'mc-create-article',
    templateUrl: './createArticle.component.html'
})
export class CreateArticleComponent implements OnInit {

    constructor(private store: Store) {}

    initialValues: ArticleInputInterface = {
        title: '',
        description: '',
        body: '',
        tagList: []
    }
    isSubmitting$: Observable<boolean>
    backendErrors$: Observable<BackendErrorsInterface | null>

    ngOnInit(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    }

    onSubmit(articleInput: ArticleInputInterface) {
        this.store.dispatch(createArticleAction({articleInput}))
    }
}