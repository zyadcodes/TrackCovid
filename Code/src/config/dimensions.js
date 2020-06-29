// This file will call the Dimensions API once and will export the screen dimensions to the rest
// of the application
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

// Exports them as named exports (imported like this: import { screenHeight, screenWidth } from './pathTo/dimension';)
export { screenHeight, screenWidth };