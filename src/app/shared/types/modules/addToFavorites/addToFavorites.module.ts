import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { AddToFavoritesService } from "./addToFavorites.service";
import { AddToFavoritesComponent } from "./components/addToFavorites.component";
import { AddToFavoritesEffect } from "./store/effects/addToFavorites.effect";

@NgModule({
    imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
    declarations: [AddToFavoritesComponent],
    exports: [AddToFavoritesComponent],
    providers: [AddToFavoritesService]
})
export class AddToFavoritesModule {}