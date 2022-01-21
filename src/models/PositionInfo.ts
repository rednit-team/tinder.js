/**
 * The position info interface used for 
 * displaying data.
 */
export interface PositionInfoInterface {
    /**
     * The country of the position info
     */
    country: {
        /**
         * The name of the country
         */
        name: string;
        /**
         * The cc of the country
         */
        cc: string;
        /**
         * The alpha3 of the country
         */
        alpha3: string;
    }
    /**
     * The timezone of the country
     */
    timezone: string;
}

/**
 * Implements some basic methods for interaction
 *
 * @class PositionInfo
 */
class PositionInfo {

    private positionInfoData: PositionInfoInterface;

    constructor(data: PositionInfoInterface) {
        this.positionInfoData = data;
    }
}

export default PositionInfo;