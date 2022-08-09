# Covid-19 Status Mobile App

## Screenshots

![app-review](https://user-images.githubusercontent.com/93818025/182182128-c718e649-f254-4af0-8c56-dc45124d7e8b.jpg)

## Setting up the development environment

---

Assuming that you have Node 14 LTS or greater installed, you can use npm to install the Expo CLI command line utility:

```
npm install -g expo-cli
```

Then run the following commands to install dependencies:

```
npm install

npm start # you can also use: expo start
```

This will start a development server for you.

You also need `env.js` at the root file of your project.

```
export default {
    xrapidKey: "Your Rapid key",
    xrapidHost: "...",
    xrapidURL: "..."
}
```

You need to visit [RapidAPI - Free Covid-19 Api](https://rapidapi.com/api-sports/api/covid-193) to get your api key etc.

## Technologies

- React Native [docs](https://reactnative.dev/docs/getting-started)
- Expo [docs](https://docs.expo.dev/)
- React Navigation [docs](https://reactnavigation.org/docs/getting-started/)
- Redux [docs](https://redux.js.org/introduction/getting-started)
- React-redux [docs](https://react-redux.js.org/introduction/getting-started)
- Redux-thunk [git-hub](https://github.com/reduxjs/redux-thunk)
