import {MatchInterface} from '../../models/Match';

export interface LoadAllMatchesResponse {
    data: {
        next_page_token?: string;
        matches: MatchInterface[];
    };
}