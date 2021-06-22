
    import React, { Component } from 'react'
    import Layout from '../components/Layout/Layout';
    import Commitment from '../components/Commitment/Commitment';
import ContactCircle from '../components/ContactCircle/ContactCircle';

    export default class Commitments extends Component {
        render() {
            return (
                <Layout>
                    <Commitment />
                    <ContactCircle />
                </Layout>
            )
        }
    }

