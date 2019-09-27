import Config from '../credentials'
import { Dimensions } from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
const hUnit = height / 640;
const wUnit = width / 360;


export function heightUnit(size) {
    return size * hUnit
}

export function widthUnit(size) {
    return  size * wUnit
}

export function getPosterUrl(posterPath){
    return `${Config.IMAGE_URL}${posterPath}`
}