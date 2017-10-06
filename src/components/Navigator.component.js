import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavigatorButton from './NavigatorButton.component';

class Navigator extends Component {

	constructor(props) {
		super(props);
		this.state = {
			buttonIndex: 0,
			currentPage: this.props.buttonObjects[0]["page"]
		};
		this.selectButton = this.selectButton.bind(this);
		this.openLink = this.openLink.bind(this);
	}

	selectButton(index, page) {
		this.setState({buttonIndex: index, currentPage: page});
	}

	openLink(index) {
		var link = this.props.buttonObjects[index]["link"];
		window.open(link, "_blank");
	}

	render() {
		var buttons = this.props.buttonObjects.map(function(buttonObject, index) {
			var selected = false;
			var buttonIcon = (<div></div>);
			if(index === this.state.buttonIndex) {
				selected = true;
			}
			var switchEvent = this.selectButton;
			if("link" in buttonObject) {
				switchEvent = this.openLink;
			}
			if("icon" in buttonObject) {
				buttonIcon = buttonObject["icon"];
			}
			return (<NavigatorButton key={index} label={buttonObject["label"]} index={index} switchComponent={buttonObject["page"]} switchEvent={switchEvent} selected={selected} link={("link" in buttonObject)} icon={buttonIcon}/>);
		}.bind(this));

		return(<div className="navigator">
				<ReactCSSTransitionGroup transitionName="buttonGroup" transitionEnter={false} transitionLeave={false} transitionAppear={true} transitionAppearTimeout={1000}>
					<div key={0}>
						{buttons}
					</div>
				</ReactCSSTransitionGroup>
					
				<ReactCSSTransitionGroup transitionName="navigatorGroup" transitionAppear={true} transitionAppearTimeout={1000} transitionEnter={false} transitionLeave={false}>
					<div key="page" className="navigatorPage">
						{this.state.currentPage}
					
					</div>
				</ReactCSSTransitionGroup>
			</div>);
	}
}

Navigator.defaultProps = {
	buttonObjects: [{"label": "Button 1", "page": ""}, {"label": "Button 2", "page": ""}, {"label": "Button 3", "page": ""}]
};

Navigator.propTypes = {
	buttonObjects: PropTypes.array
};

export default Navigator;
