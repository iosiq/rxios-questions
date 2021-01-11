// Browser environment sniffing
const inBrowser = typeof window !== 'undefined';
const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
export const PlatformOfIE = UA && /msie|trident/.test(UA);
export const PlatformOfIE9 = UA && UA.indexOf('msie 9.0') > 0;
export const PlatformOfEdge = UA && UA.indexOf('edge/') > 0;
export const PlatformOfAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
export const PlatformOfIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
export const PlatformOfChrome = UA && /chrome\/\d+/.test(UA) && !PlatformOfEdge;
export const PlatformOfPhantomJS = UA && /phantomjs/.test(UA);
export const PlatformOfFF = UA && UA.match(/firefox\/(\d+)/);
export const PlatformOfApp = PlatformOfIOS || PlatformOfAndroid;
export const PlatformOfWechat = UA && UA.match(/MicroMessenger/i) === 'micromessenger';