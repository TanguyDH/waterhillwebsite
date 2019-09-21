
    import React, { Component } from 'react'
    import Layout from '../components/Layout/Layout';
    import BlogBackground from '../components/BlogBackground/BlogBackground';
    import BlogList from '../components/BlogList/BlogList';

    export default class Blog extends Component {
        render() {
            return (
                <Layout>
                    <BlogBackground />
                    <BlogList />
                </Layout>
            )
        }
    }


