import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { BackendErrorMessagesModule } from "../shared/types/modules/backendErrorMessages/backendErrorMessages.module";
import { SettingsComponent } from "./components/settings.component";
import { reducers } from "./store/reducers";

const routes = [
    {path: 'settings', component: SettingsComponent}
]

@NgModule({
    imports: [
        CommonModule,
        BackendErrorMessagesModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('settings', reducers),
        ReactiveFormsModule
    ],
    declarations: [SettingsComponent]
})
export class SettingsModule {}