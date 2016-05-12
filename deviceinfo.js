/**
 * @providesModule react-native-device-info
 */

var RNDeviceInfo = require('react-native').NativeModules.RNDeviceInfo;
import React from "react-native";

module.exports = {
	getUniqueID: function () {
		return RNDeviceInfo.uniqueId;
	},
	getDeviceId: function () {
		return RNDeviceInfo.deviceId;
	},
	getManufacturer: function () {
		return RNDeviceInfo.systemManufacturer;
	},
	getModel: function () {
		return RNDeviceInfo.model;
	},
	getSystemName: function () {
		return RNDeviceInfo.systemName;
	},
	getSystemVersion: function () {
		return RNDeviceInfo.systemVersion;
	},
	getBundleId: function () {
		return RNDeviceInfo.bundleId;
	},
	getBuildNumber: function () {
		return RNDeviceInfo.buildNumber;
	},
	getVersion: function () {
		return RNDeviceInfo.appVersion;
	},
	getReadableVersion: function () {
		return RNDeviceInfo.appVersion + "." + RNDeviceInfo.buildNumber;
	},
	getDeviceName: function () {
		return RNDeviceInfo.deviceName;
	},
	getUserAgent: function () {
		return RNDeviceInfo.userAgent;
	},
	getDeviceLocale: function () {
		return RNDeviceInfo.deviceLocale;
	},
	getDeviceCountry: function () {
		return RNDeviceInfo.deviceCountry;
	},
	getAvailableExternalMemorySize: function () {
		if (React.Platform.OS === 'ios') {
			alert('Not implemented for iOS yet');
		}
		return RNDeviceInfo.freeExternalSpace;
	},
	getAvailableInternalMemorySize: function () {
		if (React.Platform.OS === 'ios') {
			alert('Not implemented for iOS yet');
		}
		return RNDeviceInfo.freeInternalSpace;
	}
};
