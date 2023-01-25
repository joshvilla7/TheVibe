import { Action, createReducer, on } from "@ngrx/store";
import { FeedStateInterface } from "../feedState.interface";
import { getFeedAction, getFeedSuccessAction, getFeedFailureAction } from "./actions/getFeed.action";

const initialState: FeedStateInterface = {
    data: null,
    isLoading: false,
    error: null
}

const feedReducer = createReducer(
    initialState,
    on(getFeedAction, (state): FeedStateInterface => ({
        ...state,
        isLoading: true
    })
    ),
    on(getFeedSuccessAction, (state, action): FeedStateInterface => ({
        ...state,
        isLoading: true,
        data: action.feed
    })
    ),
    on(getFeedFailureAction, (state): FeedStateInterface => ({
        ...state,
        isLoading: false
    })
    ),
)

export function reducers(state: FeedStateInterface, action: Action) {
    return feedReducer(state, action)
}