import React from 'react';
import EmailList from './EmailList';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailDetail: [],
            emailBody: "",
            activeMail: null,
            showEmailBody: "mainBackground"
        }
    }

    componentDidMount = () => {
        fetch("https://flipkart-email-mock.vercel.app/")
            .then(res => res.json())
            .then(data => this.setState({ emailDetail: data.list }))
            .catch(err => console.log(err))
    }

    fetchMail = (active) => {
        fetch('https://flipkart-email-mock.vercel.app/?id=' + active.id)
            .then(res => res.json())
            .then(data => this.setState(prevState => {
                return {
                    ...prevState,
                    emailBody: data.body,
                    showEmailBody: prevState.showEmailBody + " showMailBody",
                    activeMail: {
                        name: active.name
                    }
                }
            }))
            .catch(err => err)

    }

    render() {
        return (
            <main className={this.state.showEmailBody}>
                <section >
                    {this.state.emailDetail.map(email =>
                        <EmailList
                            id={email.id}
                            name={email.from.name}
                            emailId={email.from.email}
                            subject={email.subject}
                            description={email.short_description}
                            emailClick={this.fetchMail}
                        />)}
                </section>
                {this.state.emailBody.length > 0 &&
                    <section >
                        <div className="emailBody">
                            <div className="temp"><b>{this.state.activeMail.name.charAt(0)}</b></div>
                            <b>{this.state.activeMail.name}</b>
                            <div style={{ padding: "0 30px" }} dangerouslySetInnerHTML={{ __html: this.state.emailBody }} />
                        </div>
                    </section>}
            </main >
        )
    }
}

export default Home