import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import portrait from './img/portrait.jpg';
import React, {Component} from 'react';
import {Card, CardHeader, CardBlock, CardFooter} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import Navigator from './components/Navigator.component';
import ProjectsList from './components/ProjectsList.component';

const pullRequests = [{"repo_owner": "Microsoft", "repo": "vscode", "request_number": "29860"}];
const projectNames = ["Selenium-Shoe-Bot-NakedCPH", "prIDE", "Selenium-Google-Search-Console-Bot", "TwitchInputBot"];
const pdfIcon = (<FontAwesome className="linkIcon" name="file-pdf-o"/>);
const aboutMePage = (<Card>
			<CardHeader>About Me</CardHeader>
			<CardBlock>
				<img className="img-circle portraitImage" src={portrait} alt="Portrait"/>
			</CardBlock>
			<CardFooter>Hey there! I'm a software engineer and web developer with a B.S in computer science and a minor in applied mathematics from NJIT. When I was younger, I was always amazed by computers and the fact that they could do so many complex things in the blink of an eye. Over time, that amazement grew into curiousity, and I decided to delve head-first into the world of programming. Today, I'm a systems developer at Prudential Financial, where I've helped develop a variety of web tools for generating reports and monitoring Hadoop clusters. Aside from that, I've also developed various programs and apps, both for work and in my own free time.
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
						<a className="socialMediaButton" href="https://twitter.com/RugsTweets" target="_blank" rel="noopener noreferrer"><FontAwesome name="twitter"/></a>
						<a className="socialMediaButton" href="https://github.com/brandonrninefive" target="_blank" rel="noopener noreferrer"><FontAwesome name="github-alt"/></a>
						<a className="socialMediaButton" href="https://www.linkedin.com/in/brandonrninefive/" target="_blank" rel="noopener noreferrer"><FontAwesome name="linkedin"/></a>
					</div>
				</CardBlock>
				<CardFooter>My profiles around the web.</CardFooter>
			</Card>);

const navigatorObjects = [{"label": "About Me", "page": aboutMePage}, {"label": "Projects", "page": projectsPage}, {"label": "Social Media", "page": socialMediaPage}, {"label": "Resume", "link": "https://www.dropbox.com/s/716sb4pbe3taxzd/Resume.pdf?dl=0", "icon": pdfIcon}];

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <h1>Brandon T. Ruggles</h1>
	  <h2>Always learning in order to make my mark one day.</h2>
        </div>
	<Navigator buttonObjects={navigatorObjects}/>
      </div>
    );
  }
}

export default App;
