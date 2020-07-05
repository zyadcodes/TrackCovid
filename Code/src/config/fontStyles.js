// This file is going to contain all of the fontStyles that are going to be used in the app
import colors from './colors';
import { StyleSheet, Platform, PixelRatio } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

// Gets the correct font based on either iOS or Android
const font = 'Arial';

export default StyleSheet.create({
	// The style for all big title text style
	bigTitleTextStyle: {
		fontFamily: font,
		fontSize: RFPercentage(7.5)
	},

	longTitleTextStyle: {
		fontFamily: font,
		fontSize: RFPercentage(5)
	},

	// The style for all big text style
	bigTextStyle: {
		fontFamily: font,
		fontSize: RFPercentage(3),
	},

	// The style for all small text style
	smallTextStyle: {
		fontFamily: font,
		fontSize: RFPercentage(1.5),
	},

	// The style for all sub text style
	subTextStyle: {
		fontFamily: font,
		fontSize: RFPercentage(2),
	},

	// The style for all the main text style
	mainTextStyle: {
		fontFamily: font,
		fontSize: RFPercentage(2.5),
	},

	/* The colors for all the different fonts*/
	lightGray: {
		color: colors.lightGray,
	},

	black: {
		color: colors.black,
	},

	gray: {
		color: colors.gray,
	},

	green: {
		color: colors.green,
	},

	lightPurple:{
		color: colors.lightPurple
	},

	purple: {
		color: colors.purple
	},

	darkPurple: {
		color: colors.darkPurple
	},

	/* The different font stylings */
	bold: {
		fontWeight: 'bold',
	},
});
