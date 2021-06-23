
  import React, { Component } from "react"
  import './index.scss';
  import Layout from '../components/Layout/Layout';
  import MainBackground from '../components/MainBackground/MainBackground';
  import Poducts from '../components/Products/Products';
  import CaseStudies from "../components/CaseStudies/CaseStudies"
  import Testimony from '../components/Testimony/Testimony';
import ContactCircle from '../components/ContactCircle/ContactCircle';
  import Vison from '../components/Vision/Vision';
import WhyUs from '../components/WhyUs/WhyUs';
import { Helmet } from 'react-helmet' 

  export default class Index extends Component {
    render() {
      return (
        <Layout bg={true} blue={true}>
        <Helmet title="Water Hill, votre outil de communication" defer={false} />
          <MainBackground />
          <Poducts />
          <Vison />
          <WhyUs />
          <CaseStudies />
          <Testimony />
          <ContactCircle />
        </Layout>
      )
    }
  }


