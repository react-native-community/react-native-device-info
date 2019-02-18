/**
 * @providesModule react-native-device-info
 */
import { Platform, NativeModules, Dimensions } from 'react-native';

var RNDeviceInfo = NativeModules.RNDeviceInfo;

if (!RNDeviceInfo && Platform.OS === 'web') {
  RNDeviceInfo = require('./web');
}

const devicesWithNotch = [
  {
    brand: 'Apple',
    model: 'iPhone X',
  },
  {
    brand: 'Apple',
    model: 'iPhone XS',
  },
  {
    brand: 'Apple',
    model: 'iPhone XS Max',
  },
  {
    brand: 'Apple',
    model: 'iPhone XR',
  },
  {
    brand: 'Asus',
    model: 'ZenFone 5',
  },
  {
    brand: 'Asus',
    model: 'ZenFone 5z',
  },
  {
    brand: 'google',
    model: 'Pixel 3 XL',
  },
  {
    brand: 'Huawei',
    model: 'P20',
  },
  {
    brand: 'Huawei',
    model: 'P20 Plus',
  },
  {
    brand: 'Huawei',
    model: 'P20 Lite',
  },
  {
    brand: 'Huawei',
    model: 'ANE-LX1',
  },
  {
    brand: 'Huawei',
    model: 'Honor 10',
  },
  {
    brand: 'Huawei',
    model: 'Nova 3',
  },
  {
    brand: 'Huawei',
    model: 'Nova 3i',
  },
  {
    brand: 'Leagoo',
    model: 'S9',
  },
    {
    brand: 'LG',
    model: 'G7',
  },
  {
    brand: 'LG',
    model: 'G7 ThinQ',
  },
  {
    brand: 'LG',
    model: 'G7+ ThinQ',
  },
  {
    brand: 'LG',
    model: 'LM-Q910', //G7 One
  },
  {
    brand: 'LG',
    model: 'LM-G710', //G7 ThinQ
  },
  {
    brand: 'LG',
    model: 'LM-V405', //V40 ThinQ
  },
  {
    brand: 'Nokia',
    model: '6.1 Plus',
  },
  {
    brand: 'OnePlus',
    model: '6',
  },
  {
    brand: 'OnePlus',
    model: 'A6003',
  },
  {
    brand: 'ONEPLUS',
    model: 'A6000',
  },
  {
    brand: 'OnePlus',
    model: 'OnePlus A6003',
  },
  {
    brand: 'OnePlus',
    model: 'ONEPLUS A6013',
  },
  {
    brand: 'OnePlus',
    model: 'ONEPLUS A6000',
  },
  {
    brand: 'Oppo',
    model: 'R15',
  },
  {
    brand: 'Oppo',
    model: 'R15 Pro',
  },
  {
    brand: 'Oppo',
    model: 'F7',
  },
  {
    brand: 'Oukitel',
    model: 'U18',
  },
  {
    brand: 'Sharp',
    model: 'Aquos S3',
  },
  {
    brand: 'Vivo',
    model: 'V9',
  },
  {
    brand: 'Vivo',
    model: 'X21',
  },
  {
    brand: 'Vivo',
    model: 'X21 UD',
  },
  {
    brand: 'xiaomi',
    model: 'MI 8',
  },
  {
    brand: 'xiaomi',
    model: 'MI 8 Explorer Edition',
  },
  {
    brand: 'xiaomi',
    model: 'MI 8 SE',
  },
  {
    brand: 'xiaomi',
    model: 'MI 8 UD',
  },
  {
    brand: 'xiaomi',
    model: 'MI8Lite',
  },
  {
    brand: 'xiaomi',
    model: 'POCO F1',
  },
  {
    brand: 'xiaomi',
    model: 'Redmi 6 Pro',
  },
];

export default {
  getUniqueID: function() {
    return RNDeviceInfo.uniqueId;
  },
  getInstanceID: function() {
    return RNDeviceInfo.instanceId;
  },
  getSerialNumber: function() {
    return RNDeviceInfo.serialNumber;
  },
  getIPAddress: function() {
    return RNDeviceInfo.getIpAddress();
  },
  getMACAddress: function() {
    return RNDeviceInfo.getMacAddress();
  },
  getDeviceId: function() {
    return RNDeviceInfo.deviceId;
  },
  getManufacturer: function() {
    return RNDeviceInfo.systemManufacturer;
  },
  getModel: function() {
    return RNDeviceInfo.model;
  },
  getBrand: function() {
    return RNDeviceInfo.brand;
  },
  getSystemName: function() {
    return RNDeviceInfo.systemName;
  },
  getSystemVersion: function() {
    return RNDeviceInfo.systemVersion;
  },
  getAPILevel: function() {
    return RNDeviceInfo.apiLevel;
  },
  getBundleId: function() {
    return RNDeviceInfo.bundleId;
  },
  getApplicationName: function() {
    return RNDeviceInfo.appName;
  },
  getBuildNumber: function() {
    return RNDeviceInfo.buildNumber;
  },
  getVersion: function() {
    return RNDeviceInfo.appVersion;
  },
  getReadableVersion: function() {
    return RNDeviceInfo.appVersion + '.' + RNDeviceInfo.buildNumber;
  },
  getDeviceName: function() {
    return RNDeviceInfo.deviceName;
  },
  getUserAgent: function() {
    return RNDeviceInfo.userAgent;
  },
  getDeviceLocale: function() {
    return RNDeviceInfo.deviceLocale;
  },
  getDeviceCountry: function() {
    return RNDeviceInfo.deviceCountry;
  },
  getTimezone: function() {
    return RNDeviceInfo.timezone;
  },
  getFontScale: function() {
    return RNDeviceInfo.fontScale;
  },
  isEmulator: function() {
    return RNDeviceInfo.isEmulator;
  },
  isTablet: function() {
    return RNDeviceInfo.isTablet;
  },
  is24Hour: function() {
    return RNDeviceInfo.is24Hour;
  },
  isPinOrFingerprintSet: function() {
    return RNDeviceInfo.isPinOrFingerprintSet;
  },
  hasNotch: function() {
    return devicesWithNotch.findIndex(item => item.brand.toLowerCase() === RNDeviceInfo.brand.toLowerCase() && item.model.toLowerCase() === RNDeviceInfo.model.toLowerCase()) !== -1;
  },
  getFirstInstallTime: function() {
    return RNDeviceInfo.firstInstallTime;
  },
  getInstallReferrer: function() {
    return RNDeviceInfo.installReferrer;
  },
  getLastUpdateTime: function() {
    return RNDeviceInfo.lastUpdateTime;
  },
  getPhoneNumber: function() {
    return RNDeviceInfo.phoneNumber;
  },
  getCarrier: function() {
    return RNDeviceInfo.carrier;
  },
  getTotalMemory: function() {
    return RNDeviceInfo.totalMemory;
  },
  getMaxMemory: function() {
    return RNDeviceInfo.maxMemory;
  },
  getTotalDiskCapacity: function() {
    return RNDeviceInfo.totalDiskCapacity;
  },
  getFreeDiskStorage: function() {
    return RNDeviceInfo.freeDiskStorage;
  },
  getBatteryLevel: function() {
    return RNDeviceInfo.getBatteryLevel();
  },
  isLandscape: function() {
    const { height, width } = Dimensions.get('window');
    return width >= height;
  },
  isAirPlaneMode: function() {
    return RNDeviceInfo.isAirPlaneMode();
  },
  getDeviceType: function() {
    return RNDeviceInfo.deviceType;
  },
};
