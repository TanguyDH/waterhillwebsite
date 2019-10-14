

    import React, { Component } from 'react'
    import Layout from '../components/Layout/Layout';
    import FaqHeader from "../components/Faq/FaqHeader/FaqHeader"
    import FaqQuestionList from "../components/Faq/FaqQuestionList/FaqQuestionList"
    // import SocialNetwork from "../components/SocialNetwork/SocialNetwork"

    export default class Faq extends Component {
        state = {
            text: ''
        }

        onTextChange = e => {
            this.setState({
                text: e.target.value
            })
        }
        render() {
            return (
                <Layout blue={true}>
                    <FaqHeader text={this.state.text} onTextChange={this.onTextChange} />
                    <FaqQuestionList text={this.state.text} />
                
                </Layout>
            )
        }
    }
