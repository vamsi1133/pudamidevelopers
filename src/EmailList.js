import React from 'react';

class EmailList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="tempu" onClick={() => this.props.emailClick(this.props  )}>
                <div className="temp"><b>{this.props.name.charAt(0)}</b></div>
                <span className="spanb">
                    <p>From : <b>{this.props.name + " <" + this.props.emailId + ">"}</b> </p>
                    <p>subject :<b> {this.props.subject}</b></p>
                    <p>{this.props.description}</p>
                    <p>{this.props.date}</p>
                </span>
            </div>
        )
    }
}

export default EmailList