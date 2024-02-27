import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'z.mbr.demo.nuxonic',
  appName: 'N U X O N I C',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      // zLabs | Black | "For the safety" - In case `SplashScreen.hide()` should fail for whatever reason.
      launchShowDuration: 2000,
      launchAutoHide: true,
      // launchFadeOutDuration: 1000,
      // backgroundColor: "#ffffffff",
      // androidSplashResourceName: "splash",
      // androidScaleType: "CENTER_CROP",
      // showSpinner: false,
      // androidSpinnerStyle: "large",
      // iosSpinnerStyle: "small",
      // spinnerColor: "#999999",
      // splashFullScreen: true,
      // splashImmersive: true,
      // layoutName: "launch_screen",
      // useDialog: true
    },
  },
}

export default config
