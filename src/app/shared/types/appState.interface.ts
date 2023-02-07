import { ArticleStateInterface } from "src/app/article/articleState.interface";
import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import { CreateArticleStateInterface } from "src/app/createArticle/createArticleState.interface";
import { EditArticleStateInterface } from "src/app/editArticle/editArticleState.interface";
import { FeedStateInterface } from "./modules/feed/feedState.interface";
import { PopularTagsStateInterface } from "./modules/popularTags/popularTagsState.interface";

export interface AppStateInterface {
    auth: AuthStateInterface
    feed: FeedStateInterface
    popularTags: PopularTagsStateInterface
    article: ArticleStateInterface
    createArticle: CreateArticleStateInterface
    editArticle: EditArticleStateInterface
}