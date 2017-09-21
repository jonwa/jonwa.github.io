var React = require('react');
var createReactClass = require('create-react-class');
var Project = require('./project');

module.exports = createReactClass({
    render() {
        return (
            <div className="projects">
                <p className="title">{this.props.title}</p>
                {
                    this.props.projects.map((project, i) => {
                        return (
                            <Project key={i}
                                     name={project.name}
                                     description={project.description}
                                     organization={project.organization}
                                     thumbnail={project.thumbnail}
                                     tags={project.tags}
                                     links={project.links}/>
                        )
                    })
                }
            </div>
        );
    }

});
