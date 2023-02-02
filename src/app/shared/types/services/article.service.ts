import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { ArticleInterface } from "../article.interface";
import { GetArticleResponseInterface } from "../getArticleResponse.interface";

@Injectable()
export class ArticleService {

    constructor(private http: HttpClient) {}

    getArticle(slug: string): Observable<ArticleInterface> {
        const fullUrl = `${environment.apiUrl}/articles/${slug}`
        return this.http.get(fullUrl).pipe(map((response: GetArticleResponseInterface) => {
            return response.article
        }))
    }
}