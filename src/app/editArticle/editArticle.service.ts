import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { ArticleInterface } from "../shared/types/article.interface";
import { ArticleInputInterface } from "../shared/types/articleInputInterface";
import { SaveArticleResponseInterface } from "../shared/types/saveArticleResponse.interface";

@Injectable()
export class EditArticleService {
    constructor(private http: HttpClient) {}

    updateArticle(
        slug: string,
        articleInput: ArticleInputInterface): Observable<ArticleInterface> {
        const fullUrl = `${environment.apiUrl}/articles/${slug}`
        return this.http.put<SaveArticleResponseInterface>(fullUrl, {article: articleInput})
        .pipe(
            map((response: SaveArticleResponseInterface) => {
                return response.article
            })
        )
    }
}