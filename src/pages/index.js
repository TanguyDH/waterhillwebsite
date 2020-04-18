
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

  export default class Index extends Component {
    render() {
      return (
        <Layout>
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


