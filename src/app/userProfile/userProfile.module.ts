import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { UserProfileComponent } from "./components/userProfile.component";
import { UserProfileService } from "./service/userProfile.service";
import { GetUserProfileEffect } from "./store/effects/userProfile.effect";
import { reducers } from "./store/reducers";

const routes = [
    { path: 'profiles/:slug', commponent: UserProfileComponent},
    { path: 'profiles/:slug/favorites', component: UserProfileComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([GetUserProfileEffect]),
        StoreModule.forFeature('userProfile', reducers)
    ],
    declarations: [UserProfileComponent],
    providers: [UserProfileService]
})
export class UserProfileModule {}