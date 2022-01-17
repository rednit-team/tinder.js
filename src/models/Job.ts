/**
 * The company of an job
 */
export interface JobCompany {
  displayed: boolean;
  name: string;
}

/**
 * The title of an job
 */
export interface JobTitle {
  displayed: boolean;
  name: string;
}

/**
 * An jon of an user
 */
export interface Job {
  /**
   * The company of the job
   */
  company: JobCompany;
  /**
   * The title of the job
   */
  title: JobTitle;
}
