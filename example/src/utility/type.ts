export enum UsagePropertiesAutoUpdateMode {
  FOREGROUND_ONLY = "FOREGROUND_ONLY",
  FOREGROUND_AND_BACKGROUND = "FOREGROUND_AND_BACKGROUND",
  DISABLED = "DISABLED",
}

export interface Data1p {
  publisherId?: string;
  cs_fpid?: string;
  cs_fpit?: string;
  cs_fpdm?: string;
  cs_fpdt?: string;
}

export interface ComScoreParams {
  publisherId: string;
  applicationName?: string;
  usagePropertiesAutoUpdateMode?: UsagePropertiesAutoUpdateMode;
  usagePropertiesAutoUpdateInterval?: number;
  data_1p?: Data1p;
}
