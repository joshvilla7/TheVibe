import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ErrorMessageModule } from "../errorMessage/errorMessage.module";
import { LoadingModule } from "../loading/loading.module";
import { PopularTagsComponent } from "./component/popularTags.component";
import { PopularTagsService } from "./popularTags.service";
import { GetPopularTagsEffect } from "./store/effects/getPopularTags.effect";
import { reducers } from "./store/reducer";

@NgModule({
    imports: [
        CommonModule, 
        StoreModule.forFeature('popularTags', reducers), 
        EffectsModule.forFeature([GetPopularTagsEffect]),
        RouterModule,
        ErrorMessageModule,
        LoadingModule
    ],
    declarations: [PopularTagsComponent],
    exports: [PopularTagsComponent],
    providers: [PopularTagsService]
})
export class PopularTagsModule {}