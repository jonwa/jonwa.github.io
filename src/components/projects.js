var React = require('react');
var createReactClass = require('create-react-class');
var Project = require('./project');

module.exports = createReactClass({
    render() {
        var projects = [];
        for(var i = 0; i < this.props.projects.length; ++i) {
            var project = this.props.projects[i];
            projects.push(
                <Project key={project.name}
                         name={project.name}
                         description={project.description}
                         organization={project.organization}
                         thumbnail={project.thumbnail}
                         url={project.url}
                         display_url={project.display_url}/>
            );
        }

        return (
            <div className="projects">
                <p className="title">{this.props.title}</p>
                {projects}
            </div>
        );
    }

});
