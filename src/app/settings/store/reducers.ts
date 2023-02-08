import { Action, createReducer, on } from "@ngrx/store";
import { updateCurrentUserAction, updateCurrentUserFailureAction, updateCurrentUserSuccessAction } from "src/app/auth/store/updateCurrentUser.action";
import { SettingsStateInterface } from "./settingsState.interface";

const initialState: SettingsStateInterface = {
    isSubmitting: false,
    validationErrors: null
}

const settingsReducers = createReducer(
    initialState,
    on(
        updateCurrentUserAction,
        (state): SettingsStateInterface => ({
            ...state,
            isSubmitting: true
        })
    ),
    on(
        updateCurrentUserSuccessAction,
        (state): SettingsStateInterface => ({
            ...state,
            isSubmitting: false
        })
    ),
    on(
       updateCurrentUserFailureAction,
       (state, action): SettingsStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
       }) 
    )
)

export function reducers(state: SettingsStateInterface, action: Action) {
    return settingsReducers(state, action)
}