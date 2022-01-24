import { UserInterface } from "../models/User";

type LikedUserData = Pick<UserInterface, 'content_hash' | 'has_been_superliked' | 'expire_date'>;

class LikedUser {

    private data: LikedUserData;

    constructor(data: LikedUserData) {
        this.data = data;
    }
}

export default LikedUser;