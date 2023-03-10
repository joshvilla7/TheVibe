import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, of, switchMap, map } from "rxjs";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { AddToFavoritesService } from "../../addToFavorites.service";
import { addToFavoritesAction, addToFavoritesSuccessAction, addToFavoritesFailureAction } from "../actions/addToFavorites.action";

@Injectable()
export class AddToFavoritesEffect {

    constructor(
        private actions$: Actions, 
      private addToFavoritesService: AddToFavoritesService, 
      ) {}
    
    addToFavorites$ = createEffect(() =>
      this.actions$.pipe(
        ofType(addToFavoritesAction),
        switchMap(({isFavorited, slug}) => {
            const article$ = isFavorited 
            ? this.addToFavoritesService.removeFromFavorites(slug)
            : this.addToFavoritesService.addToFavorites(slug)
          return article$.pipe(
            map((article: ArticleInterface) => {
              return addToFavoritesSuccessAction({article})
            }),
        catchError(() => {
              return of(addToFavoritesFailureAction())
            })
          )
        })
      )
    )
    

}
