# tmdb-movies
List Movies TMDb

Requirements :

1. Follow these instructions to build native code in your project : 
https://facebook.github.io/react-native/docs/getting-started

2. clone Repo : ``` git clone https://github.com/hadar-ayoub/tmdb-movies.git && cd tmdb-mobies```

3. Add ```credentials.js``` to project root :
```
export default Config = {
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_URL: 'http://image.tmdb.org/t/p/w185',
  API_KEY: '${api_key}' // you need to specify you're TMDB Api key.
}
```

4. install project dependencies : ```yarn``` or ```npm install```

5. Run App on an android emulator: ```react-native run-andoid``` or ``` yarn run android ``` or ``` npm run android ```

6. Run App on an iphone simulator:  (installing pods on ios is required :  ``` cd ios && pod install```)
    or excute command line : ```react-native run-ios``` or ```yarn run ios```  or ```npm run ios``` 

Screenshots :

<img src="https://user-images.githubusercontent.com/5258992/65748411-2a75e900-e104-11e9-97a6-06e92a8b8d90.png" alt="drawing" width="250"/> <img src="https://user-images.githubusercontent.com/5258992/65748412-2a75e900-e104-11e9-95d6-58941dc335c6.png" alt="drawing" width="250"/> <img src="https://user-images.githubusercontent.com/5258992/65748410-29dd5280-e104-11e9-8539-a5ca1a683c5a.png" alt="drawing" width="250"/>  
