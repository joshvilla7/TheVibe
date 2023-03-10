import { createAction, props } from "@ngrx/store";
import { PopularTagType } from "../../../popularTag.type";
import { ActionTypes } from "./actionTypes";

export const getPopularTagsAction = createAction(
    ActionTypes.GET_POPULAR_TAGS)

export const getPopularTagsSuccessAction = createAction(
    ActionTypes.GET_POPULAR_TAGS_SUCCESS,
    props<{popularTags: PopularTagType[]}>()
    )

export const getPopularTagsFailure = createAction(
    ActionTypes.GET_POPULAR_TAGS_FAILURE)