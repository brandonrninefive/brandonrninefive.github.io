import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

class NavigatorButton extends Component {
	render() {
		var active = false;
		var buttonClass = "unselectedButton";
		if(this.props.selected) {
			buttonClass = "selectedButton";	
			active = true;
		}
		return (<Button className={buttonClass} outline color="primary" active={active} onClick={() => {this.props.switchEvent(this.props.index, this.props.switchComponent)}}>{this.props.label}{this.props.icon}</Button>);
	}
}

NavigatorButton.defaultProps = {
	label: "Button",
	index: 0,
	switchComponent: (<div></div>),
	switchEvent: function(component) { console.log("Switch Event Component: " + component) },
	selected: false,
	link: false,
	icon: (<div></div>)
};

NavigatorButton.propTypes = {
	label: PropTypes.string,
	index: PropTypes.number,
	switchComponent: PropTypes.element,
	switchEvent: PropTypes.func,
	selected: PropTypes.bool,
	link: PropTypes.bool,
	icon: PropTypes.element
};

export default NavigatorButton;
