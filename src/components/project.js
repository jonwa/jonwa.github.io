var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render() {
        return (
            <div className="project">
                <img src={this.props.thumbnail}/>
                <p className="name">{this.props.name}</p>
                {this.props.organization ? <p className="organization">{this.props.organization}</p> : null}
                <p className="description">{this.props.description}</p>
                <ul className="tags">
                    {
                        this.props.tags.map((tag, i) => {
                            return (
                                <li key={i} className="tag">{tag}</li>
                            )
                        })
                    }
                </ul>
                {
                    this.props.links.map((link, i) => {
                        return (
                            <div key={i} className="display_name">
                                <a key={link.url} target="_blank" href={link.url}>
                                    {link.display_name}
                                </a><br/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
});
