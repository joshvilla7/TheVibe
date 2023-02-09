import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { addToFavoritesAction } from "../store/actions/addToFavorites.action";

@Component({
    selector: 'mc-add-to-favorites',
    templateUrl: './addToFavorites.component.html'
})
export class AddToFavoritesComponent implements OnInit {

    @Input('isFavorited') isFavoriteProps: boolean
    @Input('favoritesCount') favoritesCountProps: number
    @Input('articleSlug') articleSlugProps: string

    constructor(private store: Store) {}

    favoritesCount: number
    isFavorited: boolean

    ngOnInit(): void {
        this.favoritesCount = this.favoritesCountProps
        this.isFavorited = this.isFavoriteProps
    }

    handleLike(): void {
        this.store.dispatch(addToFavoritesAction({
            isFavorited: this.isFavorited,
            slug: this.articleSlugProps
        }))
        if(this.isFavorited) {
            this.favoritesCount = this.favoritesCount - 1
        } else {
            this.favoritesCount = this.favoritesCount + 1
        }

        this.isFavorited = !this.isFavorited
    }

}