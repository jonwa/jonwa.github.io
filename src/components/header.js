var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render() {
        var contacts = [];
        for(var i = 0; i < this.props.contacts.length; ++i) {
            var contact = this.props.contacts[i];
            contacts.push(
                <li key={contact.title}>
                    <a className="contact" target="_blank" href={contact.url}>
                        {contact.title}
                    </a>
                </li>
            );
        }

        return (
            <header>
                <h1 className="name">{this.props.name}</h1>
                <ul>{contacts}</ul>
            </header>
        );
    }
});
