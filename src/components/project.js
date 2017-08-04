var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render() {
        var links = [];
        for(var i = 0; i < this.props.links.length; ++i) {
            var link = this.props.links[i];
            links.push(
                <div className="display_name">
                    <a key={link.url} target="_blank" href={link.url}>
                        {link.display_name}
                    </a><br/>
                </div>
            );
        }
        return (
            <div className="project">
                <img src={this.props.thumbnail}/>
                <p className="name">{this.props.name}</p>
                { this.props.organization ? <p className="organization">{this.props.organization}</p> : null }
                <p className="description">{this.props.description}</p>
                {links}
            </div>
        );
    }
});
