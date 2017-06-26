var React = require('react');
var createReactClass = require('create-react-class');
var Project = require('./project');

module.exports = createReactClass({
    render() {
        var projects = [];
        for(var i = 0; i < this.props.projects.length; ++i) {
            var project = this.props.projects[i];
            projects.push(
                <Project key={project.title}
                         title={project.title}
                         description={project.description}
                         thumbnail={project.thumbnail}
                         url={project.url}/>
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
