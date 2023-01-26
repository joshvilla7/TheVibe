import { Component, Input, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { GetFeedResponseInterface } from "./getFeedResponse.interface";
import { getFeedAction } from "./store/actions/getFeed.action";
import { feedSelector, errorSelector, isLoadingSelector } from "./store/selectors";

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit{
    @Input('apiUrl') apiUrlProps: string

    constructor(private store: Store) {}

    feed$: Observable<GetFeedResponseInterface | null>
    error$: Observable<string | null>
    isLoading$: Observable<boolean>

    ngOnInit(): void {
        this.initializeValues()
        this.fetchData()
    }

    initializeValues():void {
        this.feed$ = this.store.pipe(select(feedSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    }

    fetchData():void {
        this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
    }
}