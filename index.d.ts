declare module 'comscore-react-native' {
  /**
   * Enum representing the auto-update modes for usage properties.
   */
  export enum UsagePropertiesAutoUpdateMode {
    FOREGROUND_ONLY = 'FOREGROUND_ONLY', // Update usage properties only when the app is in the foreground.
    FOREGROUND_AND_BACKGROUND = 'FOREGROUND_AND_BACKGROUND', // Update usage properties when the app is in the foreground and background.
    DISABLED = 'DISABLED', // Disable auto-update of usage properties.
  }

  /**
   * Interface representing the data_1p object used in ComScoreParams.
   */
  export interface Data1p {
    publisherId?: string; // The publisher ID.
    cs_fpid?: string; // First-party ID.
    cs_fpit?: string; // First-party ID timestamp.
    cs_fpdm?: string; // First-party ID domain.
    cs_fpdt?: string; // First-party ID TTL (Time To Live).
  }

  /**
   * Interface representing the parameters for initializing ComScore.
   */
  export interface ComScoreParams {
    publisherId: string; // The publisher ID.
    applicationName?: string; // The name of the application.
    usagePropertiesAutoUpdateMode?: UsagePropertiesAutoUpdateMode; // The auto-update mode for usage properties.
    usagePropertiesAutoUpdateInterval?: number; // The interval for auto-updating usage properties.
    data_1p?: Data1p; // First-party data parameters.
  }

  /**
   * Initializes ComScore with the provided parameters.
   * @param params The ComScore initialization parameters.
   *               - publisherId: The publisher ID.
   *               - applicationName?: The name of the application (optional).
   *               - usagePropertiesAutoUpdateMode?: The auto-update mode for usage properties (optional).
   *               - usagePropertiesAutoUpdateInterval?: The interval for auto-updating usage properties (optional).
   *               - data_1p?: First-party data parameters (optional).
   * @returns A Promise that resolves when ComScore is initialized successfully.
   */
  export function initializeComscore(params: ComScoreParams): Promise<void>;

  /**
   * Tracks a screen with the given screen name.
   * @param screenName The name of the screen to track.
   * @returns A Promise that resolves when the screen tracking is completed successfully.
   */
  export function trackScreen(screenName: string): Promise<void>;

  /**
   * Updates the consent state.
   * @param consentState The new consent state.
   * @returns A Promise that resolves when the consent state is updated successfully.
   */
  export function updateConsent(consentState: string): Promise<void>;

  /**
   * Updates the first-party data parameters.
   * @param params The updated first-party data parameters.
   *               - publisherId: The publisher ID (required).
   *               - cs_fpid?: First-party ID (optional).
   *               - cs_fpit?: First-party ID timestamp (optional).
   *               - cs_fpdm?: First-party ID domain (optional).
   *               - cs_fpdt?: First-party ID TTL (Time To Live) (optional).
   * @returns A Promise that resolves when the first-party data parameters are updated successfully.
   */
  export function updateData1P(params: Data1p): Promise<void>;
}
