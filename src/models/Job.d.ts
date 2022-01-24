/**
 * The company of an job
 */
export interface JobCompanyInterface {
  displayed?: boolean;
  name?: string;
}

/**
 * The title of an job
 */
export interface JobTitleInterface {
  displayed?: boolean;
  name?: string;
}

/**
 * An jon of an user
 */
export interface JobInterface {
  /**
   * The company of the job
   */
  company?: JobCompanyInterface;
  /**
   * The title of the job
   */
  title?: JobTitleInterface;
}
