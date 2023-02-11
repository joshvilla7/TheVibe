import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {UserProfileComponent} from 'src/app/userProfile/components/userProfile.component'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {reducers} from 'src/app/userProfile/store/reducers'
import { UserProfileService } from './service/userProfile.service'
import { FeedModule } from '../shared/types/modules/feed/feed.module'
import { GetUserProfileEffect } from './store/effects/userProfile.effect'

const routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
    FeedModule
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileService]
})
export class UserProfileModule {}
