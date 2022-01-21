import { DATE_TIME_FORMAT } from "../Constants";
import { parse } from 'date-fns';
import { BadgeInterface } from "./Badge";
import { InstagramInterface } from "./Instagram";
import { JobInterface } from "./Job";
import { ParseableInterface } from "./ModelInterfaces";
import { InterestInterface, PhotoInterface } from "./Other";
import { PositionInterface } from "./Position";
import { PositionInfoInterface } from "./PositionInfo";
import { SchoolInterface } from "./School";

/**
 * The interface of a profile.
 */
export interface ProfileInterface {
    /**
     * The ID of the user
     */
    _id: string;
    /**
     * The min age of the filter
     */
    age_filter_max: number;
    /**
     * The max age of the filter
     */
    age_filter_min: number;
    /**
     * All badges of a profile
     * @see BadgeInterface
     */
    badges: BadgeInterface[];
    /**
     * The Bio of a profile
     */
    bio: string;
    /**
     * The birth date of a profile
     */
    birth_date: Date|string;
    /**
     * The creation date of a profile
     */
    create_date: Date|string;
    /**
     * The distance filter of a profile
     */
    distance_filter: number;
    /**
     * The email of the user who owns the profile
     */
    email: string;
    /**
     * The gender of the profile user
     */
    gender: number;
    /**
     * The gender filter of the user profile
     */
    gender_filter: number;
    /**
     * The instagram data of the profile
     * @see InstagramInterface
     */
    instagram: InstagramInterface;
    /**
     * All interests of the profile
     * @see InterestInterface
     */
    interested_in: InterestInterface[];
    /**
     * All jobs of a profile
     * @see JobInterface
     */
    jobs: JobInterface[];
    /**
     * The name of the profile
     */
    name: string;
    /**
     * All photos of profile
     * @see PhotoInterface
     */
    photos: PhotoInterface[];
    /**
     * If the optimizer for photos is enabled
     */
    photo_optimizer_enabled: boolean;
    /**
     * The ping to the server
     */
    ping_time: string;
    /**
     * The position of the profile
     * @see PositionInterface
     */
    pos: PositionInterface;
    /**
     * The position info of the profile
     * @see PositionInfoInterface
     */
    pos_info: PositionInfoInterface;
    /**
     * All schools of a profile
     * @see SchoolInterface
     */
    schools: SchoolInterface[];
    /**
     * If the gender should be displayed on the profile
     */
    show_gender_on_profile: boolean;
    /**
     * If a user can create a squad.
     */
    can_create_squad: boolean;
}

class Profile implements ParseableInterface {

    private profileData: ProfileInterface;

    constructor(data: ProfileInterface) {
        this.profileData = data;
    }

    /**
   * Parses the date provided by the API
   *
   * @param datetime The date string or object
   */
  parseDateTime(datetime: Date | string): Date {
    return typeof datetime === 'string'
      ? parse(datetime as string, DATE_TIME_FORMAT, new Date())
      : datetime;
  }
}