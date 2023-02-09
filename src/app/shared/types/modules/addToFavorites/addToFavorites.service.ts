import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { ArticleInterface } from "../../article.interface";
import { GetArticleResponseInterface } from "../../getArticleResponse.interface";

@Injectable()
export class AddToFavoritesService {
    constructor(private http: HttpClient) {}

    addToFavorites(slug: string): Observable<ArticleInterface> {
        const url = this.getUrl(slug)
        return this.http.post(url, {}).pipe(map(this.getArticle))
    }

    removeFromFavorites(slug: string): Observable<ArticleInterface> {
        const url = this.getUrl(slug)
        return this.http.delete(url).pipe(map(this.getArticle))
    }

    getUrl(slug: string) {
        return `${environment.apiUrl}/articles/${slug}/favorite`
    }

    getArticle(response: GetArticleResponseInterface): ArticleInterface {
        return response.article
    }
}