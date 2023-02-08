import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, of, switchMap, map } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { updateCurrentUserAction, updateCurrentUserSuccessAction, updateCurrentUserFailureAction } from "../updateCurrentUser.action";


@Injectable()
export class UpdateCurrentUserEffect {

    constructor(private actions$: Actions, 
      private authService: AuthService) {}
    
    updateCurrentUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(updateCurrentUserAction),
        switchMap(({currentUserInput}) => {
          return this.authService.updateCurrentUser(currentUserInput).pipe(
            map((currentUser: CurrentUserInterface) => {
              return updateCurrentUserSuccessAction({currentUser})
            }),
        catchError((errorResponse: HttpErrorResponse) => {
              return of(updateCurrentUserFailureAction({errors: errorResponse.error.errors}))
            })
          )
        })
      )
    )
    

}
