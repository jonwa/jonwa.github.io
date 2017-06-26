var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var Header = require('./components/header');
var Projects = require('./components/projects');

var json = require('./data.json');

var App = createReactClass({
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
});

ReactDOM.render(
    <App data={json}/>,
    document.getElementById('app')
);
