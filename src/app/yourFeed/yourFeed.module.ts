import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BannerModule } from "../shared/types/modules/banner/banner.module";
import { FeedModule } from "../shared/types/modules/feed/feed.module";
import { FeedTogglerModule } from "../shared/types/modules/feedToggler/feedToggler.module";
import { PopularTagsModule } from "../shared/types/modules/popularTags/popularTags.module";
import { YourFeedComponent } from "./components/yourFeed.component";

const routes = [
    {path: 'feed', component: YourFeedComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule,
        BannerModule,
        PopularTagsModule,
        FeedTogglerModule,
    ],
    declarations: [YourFeedComponent],
    exports: [YourFeedComponent]
})
export class YourFeedModule {}