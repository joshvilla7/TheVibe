import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BannerModule } from "../shared/types/modules/banner/banner.module";
import { FeedModule } from "../shared/types/modules/feed/feed.module";
import { PopularTagsModule } from "../shared/types/modules/popularTags/popularTags.module";
import { GlobalFeedComponent } from "./components/globalFeed.component";

const routes = [
    { path: '', component: GlobalFeedComponent}
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), FeedModule, BannerModule, PopularTagsModule],
    declarations: [GlobalFeedComponent]
})
export class GlobalFeedModule {}