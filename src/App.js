import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import portrait from './img/portrait.jpg';
import React, {Component} from 'react';
import {Card, CardHeader, CardBlock, CardFooter} from 'reactstrap';
import Navigator from './components/Navigator.component';
import ProjectsList from './components/ProjectsList.component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const pullRequests = [{"repo_owner": "nodejs", "repo": "node", "request_numbers": ["20321"]}, {"repo_owner": "Microsoft", "repo": "vscode", "request_numbers": ["29860", "40405"]},{"repo_owner": "ReactTraining", "repo": "react-router", "request_numbers": ["6118"]}];
const projectNames = ["add-redux", "prIDE", "Selenium-Shoe-Bot-NakedCPH", "custom-react-big-calendar", "RaiGames-Bot"];
const pdfIcon = (<span className="icon-file-pdf-o linkIcon"></span>);
const aboutMePage = (<Card>
			<CardHeader>About Me</CardHeader>
			<CardBlock>
				<img className="img-circle portraitImage" src={portrait} alt="Portrait"/>
			</CardBlock>
			<CardFooter>Hey there! I'm a software engineer in the NJ/NY area with a B.S in computer science and a minor in applied mathematics from NJIT. When I was younger, I was always amazed by computers and the fact that they could do so many complex things in the blink of an eye. Over time, that amazement grew into curiousity, and I decided to delve head-first into the world of programming during my freshman year of highschool. Today, I'm a systems developer at Prudential Financial, where I've helped develop a variety of web tools and scripts for generating reports and monitoring Hadoop clusters. Aside from that, I've also developed various programs, apps, and games, both for work and for my own enjoyment. One day, I dream of changing the world for the better with my programming abilities and the lessons that I learn throughout my career.
 			</CardFooter>
		     </Card>);

const projectsPage = (<Card>
			<CardHeader>Projects and Contributions</CardHeader>
			<ProjectsList projectNames={projectNames} pullRequests={pullRequests}/>
			<CardFooter>Some of my latest and most popular projects and contributions. This list is generated with a little help from the <a href="https://developer.github.com/v3/" target="_blank" rel="noopener noreferrer">GitHub API</a>.</CardFooter>
		      </Card>);

const socialMediaPage = (<Card>
				<CardHeader>Social Media</CardHeader>
				<CardBlock>
					<div className="socialMediaDiv">
						<a className="socialMediaButton" href="https://twitter.com/RugsTweets" target="_blank" rel="noopener noreferrer"><span className="icon-twitter"></span></a>
						<a className="socialMediaButton" href="https://github.com/brandonrninefive" target="_blank" rel="noopener noreferrer"><span className="icon-github-alt"></span></a>
						<a className="socialMediaButton" href="https://www.linkedin.com/in/brandonrninefive/" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin"></span></a>
					</div>
				</CardBlock>
				<CardFooter>My profiles around the web.</CardFooter>
			</Card>);

const navigatorObjects = [{"label": "About Me", "page": aboutMePage}, {"label": "Projects", "page": projectsPage}, {"label": "Social Media", "page": socialMediaPage}, {"label": "Resume", "link": "https://www.dropbox.com/s/716sb4pbe3taxzd/Resume.pdf?dl=0", "icon": pdfIcon}];

class App extends Component {

  render() {
    return (
      <div className="App">
	  <ReactCSSTransitionGroup transitionName="headerGroup" transitionAppear={true} transitionAppearTimeout={1000} transitionEnter={false} transitionLeave={false}>
              <div key={0}>
                <h1>Brandon T. Ruggles</h1>
	        <h2>Always learning in order to make my mark one day.</h2>
              </div>
	  </ReactCSSTransitionGroup>
	<Navigator buttonObjects={navigatorObjects}/>
      </div>
    );
  }
}

export default App;
