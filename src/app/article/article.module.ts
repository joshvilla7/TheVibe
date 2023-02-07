import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ErrorMessageModule } from "../shared/types/modules/errorMessage/errorMessage.module";
import { LoadingModule } from "../shared/types/modules/loading/loading.module";
import { TagListModule } from "../shared/types/modules/tagList/tagList.module";
import { ArticleService as SharedArticleService} from "../shared/types/services/article.service";
import { ArticleService } from "./article.service";
import { ArticleComponent } from "./components/article.component";
import { DeleteArticleEffect } from "./store/effects/deleteArticle.effect";
import { GetArticleEffect } from "./store/effects/getArticle.effect";
import { reducers } from "./store/reducers";

const routes = [
    { path: 'articles/:slug', component: ArticleComponent}
]

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
        StoreModule.forFeature('article', reducers),
        RouterModule.forChild(routes),
        LoadingModule,
        ErrorMessageModule,
        TagListModule
    ],
    declarations: [ArticleComponent],
    exports: [],
    providers: [SharedArticleService, ArticleService]
})
export class ArticleModule {}