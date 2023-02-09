import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'mc-add-to-favorites',
    templateUrl: './addToFavorites.component.html'
})
export class AddToFavoritesComponent implements OnInit {

    @Input('isFavorited') isFavoriteProps: boolean
    @Input('favoritesCount') favoritesCountProps: number
    @Input('articleSlug') articleSlugProps: string

    favoritesCount: number
    isFavorited: boolean

    ngOnInit(): void {
        this.favoritesCount = this.favoritesCountProps
        this.isFavorited = this.isFavoriteProps
    }

    handleLike(): void {
        if(this.isFavorited) {
            this.favoritesCount = this.favoritesCount - 1
        } else {
            this.favoritesCount = this.favoritesCount + 1
        }

        this.isFavorited = !this.isFavorited
    }

}