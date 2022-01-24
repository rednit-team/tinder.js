import { UserInterface } from "../models/User";


type RecommendationData = Pick<UserInterface, 'group_matched' | 'content_hash'>;

class Recommendation {

    private data: RecommendationData;

    constructor(data: RecommendationData) {
        this.data = data;
    }
}

export default Recommendation;