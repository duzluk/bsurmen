import React from "react";
import Cards from "../common/card";

const Education = () => {
    const content = {
    src1: "/assets/mentees.png",
    src2: "/assets/abbuloka.png",
    text1: ` Mentorship - Github | Demo ${(<br />)}
            Brings mentors and mentees together to learn and teach each other.
             ${(
               <br />
             )} + Implemented HTML5, CSS3 and Materialize to structure the
            home page and info modal.
             ${(<br />)} + Explored Firestore to create database.
             ${(
               <br />
             )} + Completed data fetching part to render user information on
            the page.
            ${(
              <br />
            )} + Fixed bugs that cause problem of the user experience.`,
    text2: `Abbuloka - Github | Demo <br />
            An e-commercial website that promotes and sells the Bennu rocks
            pieces to the people. (This is the first exercise project under web
            development Bootcamp as a team. Only HTML and CSS used in the
            project.) <br />+ Devised the project idea and designed UI. <br />+
            Utilized Bootstrap 4 to create responsive page for use on different
            size of screens. <br /> + Created index page and footer through
            HTML5 and CSS3.`
  };
  return (
    <>
      <Cards src={content.src1} text={content.text1} />
      <Cards src={content.src2} text={content.text2} />
    </>
  );
};

export default Education;
