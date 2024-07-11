import React from "react";
import CoffeBeans from "../../components/UI/coffeeBeans3";
import AboutUsItem from "./AboutUsItem";

const AboutUs = ({data}) => {
  const {pageTitle,text} = data;
  return (
    <section className="about_us">
      <h1 className="title_about">{pageTitle}</h1>
      <CoffeBeans color="black" />
      <div className="text_about">
        {text.map((item)=> (
          <AboutUsItem p={item.p} key={item.id}/>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
