/**
 * The base interface of the user position
 */
export interface PositionInterface {
    /**
     * The at position of the user
     */
    at: number;
    /**
     * The latitude of the position
     */
    lat: number;
    /**
     * The longitude of the position
     */
    lon: number;
}

/**
 * Implements some basic methods for interaction
 *
 * @class Position
 */
class Position {

    private positionData: PositionInterface;

    constructor(data: PositionInterface) {
        this.positionData = data;
    }
}

export default Position;