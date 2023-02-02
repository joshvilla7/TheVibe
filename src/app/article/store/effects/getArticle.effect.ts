import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, of, switchMap, map } from "rxjs";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleService as SharedArticleService } from "src/app/shared/types/services/article.service";
import { getArticleAction, getArticleSuccessAction, getArticleFailureAction } from "../actions/getArticle.action";

@Injectable()
export class GetArticleEffect {

    constructor(
        private actions$: Actions, 
      private sharedArticleService: SharedArticleService, 
      ) {}
    
    getArticle$ = createEffect(() =>
      this.actions$.pipe(
        ofType(getArticleAction),
        switchMap(({slug}) => {
          return this.sharedArticleService.getArticle(slug).pipe(
            map((article: ArticleInterface) => {
              return getArticleSuccessAction({article})
            }),
        catchError(() => {
              return of(getArticleFailureAction())
            })
          )
        })
      )
    )
    

}
