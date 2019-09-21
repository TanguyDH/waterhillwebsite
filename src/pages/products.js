import React, { Component } from 'react'
  import Layout from '../components/Layout/Layout';
  import ProductsBackground from "../components/ProductsBackground/ProductsBackground";
  import ProductList from "../components/ProductList/ProductList";

  export default class Products extends Component {
    render() {
      return (
        <Layout blue={true}>
          <ProductsBackground />
          <ProductList />
        </Layout>
      )
    }
  }
