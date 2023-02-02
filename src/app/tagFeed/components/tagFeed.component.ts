import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'mc-tag-feed',
    templateUrl: './tagFeed.component.html'
})
export class TagFeedComponent implements OnInit {

    constructor(private route: ActivatedRoute) {}
    
    tagName: string
    apiUrl: string

    ngOnInit(): void {
        this.tagName = this.route.snapshot.paramMap.get('slug')
        this.apiUrl = `/articles?tag=${this.tagName}`

    }
}