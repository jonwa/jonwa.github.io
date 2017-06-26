var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render() {
        return (
            <a className="project" target="_blank" href={this.props.url}>
                <img src={this.props.thumbnail}/>
                <p className="title">{this.props.title}</p>
                <p className="description">{this.props.description}</p>
            </a>
        );
    }
});
