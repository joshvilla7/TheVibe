import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, of, switchMap, map } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions";

@Injectable()
export class RegisterEffect {

    constructor(private actions$: Actions, private authService: AuthService) {}
    
    register$ = createEffect(() =>
      this.actions$.pipe(
        ofType(registerAction),
        switchMap(({request}) => {
          return this.authService.register(request).pipe(
            map((currentUser: CurrentUserInterface) => {
              return registerSuccessAction({currentUser})
            }),
        catchError((errorResponse: HttpErrorResponse) => {
              return of(registerFailureAction({errors: errorResponse.error.errors}))
            })
          )
        })
      )
    )
    
    

}
