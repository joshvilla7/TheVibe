import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
// import { stringify, parseUrl } from "query-string/base";
import { Store, select } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { environment } from "src/environments/environment";
import { GetFeedResponseInterface } from "./getFeedResponse.interface";
import { getFeedAction } from "./store/actions/getFeed.action";
import { feedSelector, errorSelector, isLoadingSelector } from "./store/selectors";

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit, OnDestroy{
    @Input('apiUrl') apiUrlProps: string
  
    constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}

    feed$: Observable<GetFeedResponseInterface | null>
    error$: Observable<string | null>
    isLoading$: Observable<boolean>
    limit = environment.limit
    baseUrl: string
    queryParamsSubscription: Subscription
    currentPage: number

    ngOnInit(): void {
        this.initializeValues()
        this.initializeListeners()
    }

    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe()
    }

    initializeValues():void {
        this.feed$ = this.store.pipe(select(feedSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.baseUrl = this.router.url.split('?')[0]
    }

    fetchFeed():void {
        const offset = this.currentPage * this.limit - this.limit;
        const parsedUrl = parseUrl(this.apiUrlProps);
        const stringifiedParams = stringify({
            limit: this.limit,
            offset,
            ...parsedUrl.query
        })
        const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
        this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
    }

    initializeListeners(): void {
        this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
            this.currentPage = (params as any).page || '1'
            this.fetchFeed()
        })
    }
}