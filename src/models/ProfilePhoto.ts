import { ParseableInterface } from "./ModelInterfaces";
import { CropInfo } from "./CropInfo";
import { ProcessedFile } from "./Files";
import { ValueHash } from "./Hashes";
import {parse} from "date-fns";
import { DATE_TIME_FORMAT } from "../Constants";

export interface ProfilePhotoData {
  /**
   * The ID of the user
   */
  id: string;
  /**
   * All assets of the profile picture
   */
  assets: any[];
  /**
   * The type of the profile picture
   */
  type: string;
  /**
   * When the profile picture was created
   */
  created_at: Date|string;
  /**
   * When the profile picture was updated
   */
  updated_at: Date|string;
  /**
   * The crop information of the profile picture
   * @see CropInfo
   */
  crop_info: CropInfo;
  /**
   * The url that resolves to the profile picture
   */
  url: string;
  /**
   * All processed files in the profile picture itself
   * @see ProcessedFile
   */
  processedFiles: ProcessedFile[];
  /**
   * The name of the profile picture file
   */
  fileName: string;
  /**
   * The extension of the profile picture file
   */
  extension: string;
  /**
   * @ignore No description provided
   */
  fbId: string;
  /**
   * @ignore No description provided
   */
  webp_qf: any[];
  /**
   * The rank of the profile picture
   */
  rank: number;
  /**
   * The score of the profile picture
   */
  score: number;
  /**
   * The win count of the profile picture
   */
  win_count: number;
  /**
   * The phash of the profile picture
   * @see ValueHash
   */
  phash: ValueHash;
  /**
   * The dhash of the profile picture
   * @see ValueHash
   */
  dhash: ValueHash;
}


/**
 * The class that can be used to perform user specific actions
 *
 * @class ProfilePhoto
 */
class ProfilePhoto implements ParseableInterface {

  private id: string;
  private assets: any[];
  private type: string;
  private created_at: Date;
  private updated_at: Date;
  private crop_info: CropInfo;
  private url: string;
  private processedFiles: ProcessedFile[];
  private fileName: string;
  private extension: string;
  private fbId: string;
  private webp_qf: any[];
  private rank: number;
  private score: number;
  private win_count: number;
  private phash: ValueHash;
  private dhash: ValueHash;

  constructor(data: ProfilePhotoData) {
    this.id = data.id;
    this.assets = data.assets;
    this.type = data.type;
    this.created_at = this.parseDateTime(data.created_at);
    this.updated_at = this.parseDateTime(data.updated_at);
    this.crop_info = data.crop_info;
    this.url = data.url;
    this.processedFiles = data.processedFiles;
    this.fileName = data.fileName;
    this.extension = data.extension;
    this.fbId = data.fbId;
    this.webp_qf = data.webp_qf;
    this.rank = data.rank;
    this.score = data.score;
    this.win_count = data.win_count;
    this.phash = data.phash;
    this.dhash = data.dhash;
  }

  /**
   * Parses the date provided by the API
   *
   * @param datetime The date string or object
   */
  parseDateTime(datetime: Date|string): Date {
    return typeof datetime === 'string'
      ? parse(datetime as string, DATE_TIME_FORMAT, new Date())
      : datetime;
  }

}
