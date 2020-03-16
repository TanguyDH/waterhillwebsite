import React, { Component } from 'react'
  import Layout from '../components/Layout/Layout';
  import ProductsBackground from "../components/ProductsBackground/ProductsBackground";
  import ProductList from "../components/ProductList/ProductList";
import SocialNetwork from '../components/SocialNetwork/SocialNetwork';

  export default class Products extends Component {
    render() {
      return (
        <Layout blue={true}>
          <ProductsBackground />
          <ProductList />
        <SocialNetwork />
        </Layout>
      )
    }
  }
