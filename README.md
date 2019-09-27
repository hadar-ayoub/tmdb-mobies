# tmdb-mobies
List Mobies TMDb




requirements :

1. Follow these instructions if you need to build native code in your project for the first time : 
https://facebook.github.io/react-native/docs/getting-started

2. Add credentials.js to project root :
```
export default Config = {
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_URL: 'http://image.tmdb.org/t/p/w185',
  API_KEY: '${api_key}' // you need to specify you're TMDB Api key.
}
```

3. Run App on android : ```react-native run-andoid``` or ``` npm run android ```

4. Run App on iphone: 
run ``` cd ios && pod install``` 
then run the command line : ```cd ../ && react-native run-ios```
