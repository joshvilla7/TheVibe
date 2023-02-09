import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { PersistanceService } from "src/app/shared/types/services/persistance.service";
import { logoutAction } from "../sync.action";

@Injectable()
export class LogoutEffect {
    constructor(private actions$: Actions, 
        private persistanceService: PersistanceService,
        private router: Router
        ){}
    
    logout$ = createEffect(() => 
        this.actions$.pipe(
            ofType(logoutAction), 
            tap(() => {
                this.persistanceService.set('accessToken', '')
                this.router.navigateByUrl('/')
            })
           ),
           {dispatch: false}
        )
}