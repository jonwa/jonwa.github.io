import React from 'react'
import Project from './Project'

export default class App extends React.Component {
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
                        );
                    })
                }
            </div>
        );
    }
}
