
    import React, { Component } from 'react'
    import Layout from '../components/Layout/Layout';
    import ContactUs from "../components/ContactUs/ContactUs"

    export default class Contact extends Component {
        render() {
            return (
              <Layout pathname={this.props.location.pathname} blue={true} bg={true} >
                <ContactUs />
              </Layout>
            )
        }
    }

