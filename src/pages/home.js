import React, { useEffect, useState, useLayoutEffect } from "react";
import axios from "axios";
import Accordion from '../components/accordion.js';
import '../styles/home.scss';

const Home = () =>  { 

  // create list to hold knowledge items
  const [knowledgeItems, setKnowledgeItems] = useState([]);

  // fetch items
  useEffect(() => {
    axios.get(`http://dev3.elemental.co.za/elemental-cms/front_end/get_knowledge`)
    .then(res => {
      setKnowledgeItems([...knowledgeItems, ...res.data.results]); 
    })
  }, []);
  
  // create list of social media knowledge items
  const socialMediaKnowledge = knowledgeItems.filter((item) => {
    return item.cat === "Social Media";
  }).sort(function(a, b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  }, []);
  
  // create list of seo knowledge items
  const SEOKnowledge = knowledgeItems.filter((item) => {
    return item.cat === "SEO";
  }).sort(function(a, b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  }, []);
  
  // create list of ppc knowledge items
  const PPCKnowledge = knowledgeItems.filter((item) => {
    return item.cat === "PPC";
  }).sort((item) => {
    return item.title;
  }).sort(function(a, b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  }, []);

  return (
    <main className="home-page-container">
      <title>Home</title> 
        <h1>Home</h1> 
        <div className="accordion-container-wrapper">
          <div className="accordion-container social-media-accordion-container">
            <h3>Social Media</h3>
            {socialMediaKnowledge.map((item) => (
              <Accordion id={`soc-med` + item.id} title={item.title} description={item.description} />
              ))}
          </div>
          <div className="accordion-container seo-accordion-container">
            <h3>SEO</h3>
            {SEOKnowledge.map((item) => (
              <Accordion id={`seo` + item.id} title={item.title} description={item.description} />
              ))}
          </div>
          <div className="accordion-container ppc-accordion-container">
            <h3>PPC</h3>
            {PPCKnowledge.map((item) => (
              <Accordion id={`ppc` + item.id} title={item.title} description={item.description} />
            ))}
          </div>

        </div>
    </main>
  );
}

export default Home;
 