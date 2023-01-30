import { PopularTagType } from "../../popularTag.type";

export interface PopularTagsStateInterface {
    data: PopularTagType[] | null
    isLoading: boolean
    error: string | null
}