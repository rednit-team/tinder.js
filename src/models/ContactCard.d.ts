/**
 * The base model of a ContactCard
 */
export interface ContactCardInterface {
  /**
   * The ID of the contact
   */
  contact_id: string;
  /**
   * The type of the contact
   */
  contact_type: string;
  /**
   * The deeplink of the contact
   */
  deeplink: string;
}
