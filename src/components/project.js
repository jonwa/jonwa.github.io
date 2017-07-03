var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render() {
        return (
            <div className="project">
                <img src={this.props.thumbnail}/>
                <p className="name">{this.props.name}</p>
                { this.props.organization ? <p className="organization">{this.props.organization}</p> : null }
                <p className="description">{this.props.description}</p>
                <a className="display_url" target="_blank" href={this.props.url}>{this.props.display_url}</a>
            </div>
        );
    }
});
