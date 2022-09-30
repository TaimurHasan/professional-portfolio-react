import React from "react";
import classes from "./About.module.css";
import { css } from 'aphrodite';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function About({ setCurrentSection, styles }) {
    return (
        <div className={`main-body ${css(styles.fadeIn)}`}>
            <div className={classes.AboutBody}>
                <h3 style={{fontStyle: "italic"}}>"It all started with Excel..."</h3>
                <p>
                    As a business school graduate, I found myself in multiple finance careers at companies like PepsiCo, Toyota, and General Mills, where I got to dive into my passion for creating models and dashboards in Microsoft Excel.
                    Frankly, it became the very thing that brought me to work everyday. <br/><br/>
                    I love everything about business, including the ability to collaborate with others, work on consumer-facing products, and make a lasting impact beyond financials.
                    Even then, nothing ever beat the feeling I got when I was able to streamline a process and deliver the solution to a happy team. <br/><br/> 
                    <span style={{fontStyle:"italic", fontWeight:"bold"}}> It all started with Excel</span>. I'm talking basic Excel; IF statements, VLOOKUPs, PIVOT tables - all that fun stuff! 
                    From there, I got involved with more complex Excel formulas, Macros, VBA, and automation. It engaged me, kept me motivated, and got me recognized. 
                    I felt like I could never stop learning.<br/><br/>
                    That exact feeling is what pushed me to expand my learnings beyond just a spreadsheet software program. With that, I jumped head first into the world of programming, coding, and computer science.
                    <br/><br/>
                    I am now proud to call myself a <span style={{color: "hsla(31, 90%, 76%, 1)", fontWeight:"bold"}}> Full Stack Engineer</span>, devoted to learning and solving the most challenging problems. In this portfolio, you will find my journey in the world of software.
                    <br/><br/>
                </p>
                <div className={classes.NavBtns}>
                        <button className={classes.AboutLink}onClick={() => {
                            setCurrentSection({ name: "Work", description: "My Work & Projects"})
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                        }} >Portfolio <BsFillArrowRightCircleFill className={classes.btnArrow}/></button>
                    </div>
                <h3>My Expertise</h3>
                <div className={classes.SkillDiv}>
                    <div className={classes.SkillBox}>
                        <h4>Frontend</h4>
                        <ul className={classes.TechnologyList}>
                            <li>👾 React.js</li>
                            <li>👾 Redux</li>
                            <li>👾 Handlebars.js</li>
                            <li>👾 Javascript ES5/ES6</li>
                            <li>👾 HTML, CSS</li>
                        </ul>
                    </div>
                    <div className={classes.SkillBox}>
                        <h4>Backend</h4>
                        <ul className={classes.TechnologyList}>
                            <li>👾 Node.js</li>
                            <li>👾 Express.js</li>
                            <li>👾 RESTful APIs</li>
                            <li>👾 SQL, MySQL</li>
                            <li>👾 NoSQL, MongoDB</li>
                            <li>👾 GraphQL, Apollo</li>
                            <li>👾 Sequelize </li>
                            <li>👾 Mongoose </li>
                        </ul>
                    </div>
                    <div className={classes.SkillBox}>
                        <h4>Other</h4>
                        <ul className={classes.TechnologyList}>
                            <li>👾 Git, Git Workflow </li>
                            <li>👾 Heroku </li>
                            <li>👾 Jest </li>
                            <li>👾 PWAs</li>
                            <li>👾 IndexedDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;