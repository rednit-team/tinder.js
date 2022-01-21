/**
 * A school that can be assigned to an user
 */
export interface SchoolInterface {
  /**
   * If the school should be displayed
   */
  displayed: boolean;
  /**
   * The ID of the meta data of a school
   */
  metadata_id: string;
  /**
   * The name of the school
   */
  name: string;
}

/**
 * Implements some basic methods for interaction
 *
 * @class School
 */
class School {
  private schoolData: SchoolInterface;

  constructor(data: SchoolInterface) {
    this.schoolData = data;
  }
}

export default School;
