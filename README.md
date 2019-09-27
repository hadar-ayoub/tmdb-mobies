# tmdb-movies
List Movies TMDb

requirements :

1. Follow these instructions if you need to build native code in your project for the first time : 
https://facebook.github.io/react-native/docs/getting-started

2. clone Repo : ``` git clone  https://github.com/hadar-ayoub/tmdb-mobies && cd tmdb-mobies```
3. Add ```credentials.js``` to project root :
```
export default Config = {
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_URL: 'http://image.tmdb.org/t/p/w185',
  API_KEY: '${api_key}' // you need to specify you're TMDB Api key.
}
```

4. Run Application : ```react-native run-andoid```
  Run App on android : ```react-native run-andoid``` or ``` npm run android ```
  Run App on iphone: 
    run ``` cd ios && pod install``` 
    then run the command line : ```cd ../ && react-native run-ios```


Screenshots :

<img src="https://user-images.githubusercontent.com/5258992/65748411-2a75e900-e104-11e9-97a6-06e92a8b8d90.png" alt="drawing" width="250"/> <img src="https://user-images.githubusercontent.com/5258992/65748412-2a75e900-e104-11e9-95d6-58941dc335c6.png" alt="drawing" width="250"/> <img src="https://user-images.githubusercontent.com/5258992/65748410-29dd5280-e104-11e9-8539-a5ca1a683c5a.png" alt="drawing" width="250"/>  
