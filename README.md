# rn-messaging-example
An example of something that looks like a React Native/ Expo message app

## Code example
This is a very basic example app, demonstrating an inbox with a chat interface. Demonstrates navigation, styling, and wiring up to a (fake) API.

### Prerequisites for running the example
* [Node.js](https://nodejs.org/en/) installed
* [Yarn](https://yarnpkg.com/en/) is installed (you could go without it, of course, but directions assume you have it)
* Expo CLI is installed globally (`npm install -g expo-cli`)
* The Expo app is installed on your phone (ignore if you're using the iOS simulator)
[Also see Expo's directions for getting started](https://expo.io/learn)

### Starting the bundler for the first time
1. In the terminal, `cd` to the project directory.
2. Run `yarn` to restore dependencies.
3. Run `expo start` to start running the app.

### Running the app in the iOS simulator or Android emulator
1. Once `expo start` kicks off and you see the QR code on the screen and directions for running, press `i` for the iOS simulator or `a`for the Android emulator.

### Running on an Android device
1. Open the Expo app on your device.
2. Go to the projects tab.
3. Open up the QR code scanner and scan the code that appears in the terminal.

### Running on an iOS device
1. Once `expo start` kicks off and you see the QR code on the screen, press `s` to create an account or sign into an existing account.
2. On the iOS Expo app, sign into the same Expo account.
3. In the projects tab, you'll see your currently streaming app. Tap on the app and it will start running.

### Building a binary app
1. Run `expo build:ios` or `expo build:android`
2. Follow the prompts about keystores and certs and stuff
3. Wait

### Publishing OTA updates
1. Run `expo publish`
2. Your binary apps will download the latest JS on the next reload

## Android users can run the app directly from the Expo publish link

If you have Expo installed, this link will take you directly into Expo, running the demo app!

[Example published to Expo](https://exp.host/@llamaluvr/rn-messaging-example)

# Companion Presentation

[Here's the slides!](https://docs.google.com/presentation/d/13ZctjaC89HC1IG78lY7ijyiU4KFQ00BZDR-AN97wAfk/edit?usp=sharing)
