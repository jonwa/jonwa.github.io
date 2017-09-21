import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import Projects from './Projects';

export default class App extends React.Component {
    render() {
        var contacts = this.props.data['contacts'];
        var professional = this.props.data['professional-projects'];
        var personal = this.props.data['personal-projects'];

        return (
            <div className="main">
                <Header name={contacts['title']} contacts={contacts['items']}/>
                <Projects title={professional['title']} projects={professional['items']} />
                <Projects title={personal['title']} projects={personal['items']} />
            </div>
        );
    }
}
