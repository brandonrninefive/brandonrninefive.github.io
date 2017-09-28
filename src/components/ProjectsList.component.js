import React, {Component} from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import {Table} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class ProjectsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			contributions: []
		};

		this.getProject = this.getProject.bind(this);
		this.getProjects = this.getProjects.bind(this);
		this.getContribution = this.getContribution.bind(this);
		this.getContributions = this.getContributions.bind(this);
	}

	componentDidMount() {
		this.getProjects();
		this.getContributions();
	}

	getProject(projectName) {
		
		$.get({
			url: "https://api.github.com/repos/brandonrninefive/" + projectName,
			data: {},
			success: function(data) {
				var projects = this.state.projects;
				projects.push(data);
				projects.sort(function(a, b) {
					if(a["watchers_count"] < b["watchers_count"]) {
						return 1;
					}
					else if(a["watchers_count"] > b["watchers_count"]) {
						return -1;
					}
					if(a["stargazers_count"] < b["stargazers_count"]) {
						return 1;
					}
					else if(a["stargazers_count"] > b["stargazers_count"]) {
						return -1;
					}
					if(a["forks_count"] < b["forks_count"]) {
						return 1;
					}
					else if(a["forks_count"] > b["forks_count"]) {
						return -1;
					}
					if(a["name"] < b["name"]) {
						return -1;
					}
					else if(a["name"] > b["name"]) {
						return 1;
					}
					return 0;
				});
				this.setState({projects: projects});
			}.bind(this),
			dataType: "json"
		});	
	}

	getProjects() {
		this.setState({projects: []});
		this.props.projectNames.forEach(function(projectName) {
			this.getProject(projectName);
		}.bind(this));
	}

	getContribution(contributionObj) {
	
		$.get({
			url: "https://api.github.com/repos/" + contributionObj["repo_owner"]  + "/" + contributionObj["repo"] + "/pulls/" + contributionObj["request_number"],
			data: {},
			success: function(data) {
				var contributions = this.state.contributions;
				contributions.push(data);
				contributions.sort();
				this.setState({contributions: contributions});
			}.bind(this),
			dataType: "json"
		});	
	}
	
	getContributions() {
		this.setState({projects: []});
		this.props.pullRequests.forEach(function(pullRequest) {
			this.getContribution(pullRequest);
		}.bind(this));
	}

	render() {

		var projects = this.state.projects.map(function(project, index) {
			return (<tr key={index}>
					<td>
						<a href={project["html_url"]} target="_blank" rel="noopener noreferrer">{project["name"]}</a>
					</td>
					<td className="repoStats">
						<div><FontAwesome name="eye" className="repoIcon"/>{project["watchers_count"]}</div>
					</td>
					<td className="repoStats">
						<div><FontAwesome name="star" className="repoIcon"/>{project["stargazers_count"]}</div>
					</td>
					<td className="repoStats">
						<div><FontAwesome name="code-fork" className="repoIcon"/>{project["forks_count"]}</div>
					</td>
				</tr>);
		});

		if(projects.length === 0) {
			projects.push(<tr key={0}><td>Loading...</td></tr>);
		}

		
		var contributions = this.state.contributions.map(function(contribution, index) {	
			return (<tr key={index}>
					<td>
						<a href={contribution["html_url"]} target="_blank" rel="noopener noreferrer">{contribution["base"]["user"]["login"] + "/" + contribution["base"]["repo"]["name"] + " PR #" + contribution["number"]}</a>
					</td>
				</tr>);
		});

		if(contributions.length === 0) {
			contributions.push(<tr key={0}><td>Loading...</td></tr>);
		}

		return(
			<div>
				<Table striped>
					<thead>
						<tr><td>Contributions</td></tr>
					</thead>
					<tbody>
						{contributions}
					</tbody>
				</Table>
				<Table striped>
					<thead>
						<tr><td>Projects</td></tr>
					</thead>
					<tbody>
						{projects}
					</tbody>
				</Table>
			</div>);
	}
}

ProjectsList.defaultProps = {
	projectNames: [],
	pullRequests: []
};

ProjectsList.propTypes = {
	projectNames: PropTypes.array,
	pullRequests: PropTypes.array
};

export default ProjectsList;
