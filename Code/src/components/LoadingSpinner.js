// This is going to be the component that displays when a loading state is on
import React from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-spinkit';
import colors from '../config/colors';
import PropTypes from 'prop-types';

// Creates the functional component
const LoadingSpinner = (props) => {
	// Declares the proptypes for this component. The only prop it will take is the isVisible prop,
	// determining whether or not the component shows
	LoadingSpinner.propTypes = {
		isVisible: PropTypes.bool.isRequired,
	};

	// Fetches the prop that was passed in
	const { isVisible } = props;

	// Renders the component
	return (
		<View>
			<Spinner isVisible={isVisible} size={60} type={'Bounce'} color={colors.purple} />
		</View>
	);
};

// Exports the component
export default LoadingSpinner;
