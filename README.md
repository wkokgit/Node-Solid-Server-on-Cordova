# Node-Solid-Server-on-mobile-using-Cordova
This is an experimental repository. The idea is to run the Node-Solid-Server on mobile. I found a repository that allows nodejs to be run on mobile using Cordova and build upon that, but there are some things that need to be fixed in order to make it work. One of them is the compatibilty of using the Android file system with the Node-Solid-Server.

_This is not working, but offers an experiment to run Node-Solid-Server._

For more information on Solid:
https://solidproject.org/

The following package is used to be able to run a node server on mobile:
https://github.com/JaneaSystems/nodejs-mobile-cordova

The following packe is the node-solid-server:
https://github.com/solid/node-solid-server

---

## How to run
Add the android platform.

```bash
$ cordova platform add android@7.1.4
```

> If you encounter `unable to load PlatformApi`, see Common errors.

Open platforms/android project in Android Studio

in app\build.gradle
- change cdvPrintProps << { to cdvPrintPros { doLast { (add } to the end)

change in android\build.gradle :
    dependencies {

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
        classpath 'com.android.tools.build:gradle:3.0.1'
    }
	
	to
	
	    dependencies {

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
        classpath 'com.android.tools.build:gradle:4.1.3'
    }
	
If you get an error about gradle version 6.1.1, 

---

## General information

### Cordova Plugins
- cordova-plugin-whitelist
- cordova-plugin-console : 1.1.0
- nodejs-mobile-cordova  : 0.4.2
- cordova-plugin-file    : 6.0.2

### Set-up information
User variables:
- ANDROID_NDK_HOME - C:\Users\username\AppData\Local\Android\Sdk\ndk\21.1.6352462
- ANDROID_SDK_ROOT - C:\Users\username\AppData\Local\Android\Sdk
- JAVA_HOME - C:\Program Files\Java\jdk1.8.0_271\
- path
	- C:\Program Files\Java\jre1.8.0_281\bin
	- C:\Program Files\Java\jdk1.8.0_271\bin

System variables:
- CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL - https://services.gradle.org/distributions/gradle-6.5-all.zip
- path
	- C:\Program Files\Java\jre1.8.0_281\bin
	- C:\Program Files\Java\jdk1.8.0_271\
	- C:\Program Files\CMake\bin
	- C:\Users\username\.gradle\wrapper\dists\gradle-6.5-all\2oz4ud9k3tuxjg84bbf55q0tn\gradle-6.5\bin


---

## Common errors

If one of the cordova plugins is not found, for example "nodejs module is not found", then try to
re-install all plugins.



when trying to add platform android :
Unable to load PlatformApi from platform. Error [ERR_UNHANDLED_ERROR]: Unhandled error. (Does not appear to implement platform Api.)
Use this: https://stackoverflow.com/questions/46799446/cordova-unable-to-load-platformapi


---

## Helpful for the future:

Writing to files in cordova
https://stackoverflow.com/questions/34694139/where-is-the-location-of-file-created-by-cordova-file-plugin