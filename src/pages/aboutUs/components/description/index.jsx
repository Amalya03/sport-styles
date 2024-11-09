import React from "react";

import classes from "../../AboutUs.module.css";

const Description = () => {
  return (
    <div className={`d-flex flex-wrap ${classes.text_container}`}>
      <span className={classes.title}>
        {" "}
        SKILLS TO BECOME A FULL STACK WEB DEVELOPER
      </span>
      <span className={classes.text}>
        Join our Web Developer Bootcamp and master the art of web development.
        Build responsive websites, create stunning web pages from scratch, and
        embark on a journey to become a full-stack developer. At Skillex, we're
        dedicated to empowering you with the skills and knowledge needed to
        succeed within tight deadlines by employing innovative strategies.Our
        courses cover everything from basic web programming to advanced
        development techniques, equipping you for success in today's digital
        landscape. Enroll now and kick-start your career in web development.
      </span>
    </div>
  );
};

export default Description;
