import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ArticleService } from "../shared/types/services/article.service";
import { ArticleComponent } from "./components/article.component";
import { GetArticleEffect } from "./store/effects/getArticle.effect";
import { reducers } from "./store/reducers";

const routes = [
    { path: 'articles/:slug', component: ArticleComponent}
]

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetArticleEffect]),
        StoreModule.forFeature('article', reducers),
        RouterModule.forChild(routes)
    ],
    declarations: [ArticleComponent],
    exports: [],
    providers: [ArticleService]
})
export class ArticleModule {}