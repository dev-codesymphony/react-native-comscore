import { NativeModules } from 'react-native';
const { ComScoreModule } = NativeModules;

export async function initializeComscore(params) {
  try {
    const comScoreParams = {
      publisherId: params.publisherId,
    };

    if (params.applicationName !== undefined) {
      comScoreParams.applicationName = params.applicationName;
    }

    if (params.usagePropertiesAutoUpdateMode !== undefined) {
      comScoreParams.usagePropertiesAutoUpdateMode =
        params.usagePropertiesAutoUpdateMode;
    }

    if (params.usagePropertiesAutoUpdateInterval !== undefined) {
      comScoreParams.usagePropertiesAutoUpdateInterval =
        params.usagePropertiesAutoUpdateInterval;
    }

    if (params.data_1p !== undefined) {
      comScoreParams.data_1p = params.data_1p;
    }

    await ComScoreModule.initializeComScore(comScoreParams);

    console.log('comScoreInitialized');
  } catch (e) {
    console.log('Error in initializing comscore', e);
  }
}

export async function trackScreen(screenName) {
  try {
    if (screenName === undefined) return;
    await ComScoreModule.trackScreen(screenName);
  } catch (e) {
    console.log('error in trackScreen : ', e);
  }
}

export async function updateConsent(consentState) {
  try {
    await ComScoreModule.updateConsent(consentState);
  } catch (e) {
    console.log('Error in updateConsent', e);
  }
}

export async function updateData1P(params) {
  let updatedData1p = {};

  if (params.publisherId !== undefined) {
    updatedData1p.publisherId = params.publisherId;
  } else {
    return console.error('PublisherId is required!');
  }

  if (params.cs_fpid !== undefined) {
    updatedData1p.cs_fpid = params.cs_fpid;
  }

  if (params.cs_fpdm !== undefined) {
    updatedData1p.cs_fpdm = params.cs_fpdm;
  }

  if (params.cs_fpit !== undefined) {
    updatedData1p.cs_fpit = params.cs_fpit;
  }

  if (params.cs_fpdt !== undefined) {
    updatedData1p.cs_fpdt = params.cs_fpdt;
  }

  await ComScoreModule.update1PData(updatedData1p);
}
