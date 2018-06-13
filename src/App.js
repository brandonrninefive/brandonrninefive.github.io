import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import portrait from './img/portrait.jpg';
import React, {Component} from 'react';
import {Card, CardHeader, CardBlock, CardFooter} from 'reactstrap';
import Navigator from './components/Navigator.component';
import ProjectsList from './components/ProjectsList.component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const pullRequestsFile = "pullRequests.json";
const projectsFile = "projectNames.json";
const pdfIcon = (<span className="icon-file-pdf-o linkIcon"></span>);
const aboutMePage = (<Card>
			<CardHeader>About Me</CardHeader>
			<CardBlock>
				<img className="img-circle portraitImage" src={portrait} alt="Portrait"/>
			</CardBlock>
			<CardFooter>Thanks for stopping by! I'm a software engineer in the NJ/NY area with a B.S in computer science and a minor in applied mathematics from NJIT. Whether I'm fixing up old computers, contributing to neat open source projects, or just tinkering with my own programming projects for fun, I can truly say that I have a deep interest in all branches of computing. I also enjoy a good bite to eat. For more on my accomplishments, feel free to use the links above, or contact me with the information provided on my resume.
 			</CardFooter>
		     </Card>);

const projectsPage = (<Card>
			<CardHeader>Projects and Contributions</CardHeader>
			<ProjectsList projectsFile={projectsFile} pullRequestsFile={pullRequestsFile}/>
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
	        <h2>Software Engineer. Big dreamer. Always learning.</h2>
              </div>
	  </ReactCSSTransitionGroup>
	<Navigator buttonObjects={navigatorObjects}/>
      </div>
    );
  }
}

export default App;
