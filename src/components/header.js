import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 className="name">{this.props.name}</h1>
                <ul>
                {
                    this.props.contacts.map((contact, i) => {
                        return (
                            <li key={i}>
                                <a className="contact" target="_blank" href={contact.url}>
                                    {contact.title}
                                </a>
                            </li>
                        );
                    })
                }
                </ul>
            </header>
        );
    }
}
