import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { combineLatest, map, Observable, Subscription } from "rxjs";
import { currentUserSelector } from "src/app/auth/store/selectors";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { getArticleAction } from "../store/actions/getArticle.action";
import { articleSelector, errorSelector, isLoadingSelector } from "../store/selectors";

@Component({
    selector: 'mc-article',
    templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit, OnDestroy{
    constructor(private store: Store, private route: ActivatedRoute) {}

    slug: string
    article: ArticleInterface
    articleSubscription: Subscription
    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    isAuthor$: Observable<boolean>

    ngOnInit(): void {
        this.initializeValues()
        this.initializeListeners()
        this.fetchData()
    }

    ngOnDestroy(): void {
        this.articleSubscription.unsubscribe()
    }

    initializeValues(): void {
        this.slug = this.route.snapshot.paramMap.get('slug')
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.isAuthor$ = combineLatest(
            {article: articleSelector, currentUser: currentUserSelector}
        ).subscribe(res => console.log('this is', res))
    }

    initializeListeners(): void {
        this.articleSubscription = this.store.pipe(select(articleSelector)).subscribe((article: ArticleInterface | null) => {
            this.article = article
        })
    }

    fetchData(): void {
        this.store.dispatch(getArticleAction({slug: ''}))
    }
}