import React from "react";
import classes from "./About.module.css"

function About() {
    return (
        <div className="main-body">
            <h3 style={{fontStyle: "italic"}}>"It all started with Excel..."</h3>
            <p>
                As a business school graduate, I found myself in a finance career at PepsiCo, where I got to really dive into my interest of creating models and dashboards in Microsoft Excel.
                And frankly, it became the very thing that brought me to work everyday. <br/><br/>
                Don't get me wrong, I love everything about business, including the ability to collaborate with others, work on consumer-facing products, and make a lasting impact beyond financials.
                Even then, nothing ever beat the feeling I got when I was able to streamline a process and deliver it to a happy team. <br/><br/> 
                <span style={{fontStyle:"italic", fontWeight:"bold"}}> It all started with Excel </span>. I'm talking basic Excel; IF statements, VLOOKUPs, PIVOT tables - all that fun stuff! 
                It didn't stop there, I got involved with more complex Excel formulas, Macros, VBA, and automation. It engaged me, kept me motivated, and got me recognized. 
                I felt like I could never stop learning.<br/><br/>
                That same feeling is what pushed me to expand my learnings beyond just a spreadsheet software program. With that, I jumped head first into the world of programming, coding, and computer science.
                <br/><br/>
                In this portfolio, you will find my journey in the world of Full Stack Development.   
            </p>
            <h3>My Expertise</h3>
            <ul className={classes.TechnologyList}>
                <li>👾 Javascript ES5, ES6</li>
                <li>👾 Python</li>
                <li>👾 React.js</li>
                <li>👾 Node.js</li>
                <li>👾 Express.js</li>
                <li>👾 Handlebars.js</li>
                <li>👾 MySQL, Sequelize</li>
                <li>👾 NoSQL, MongoDB, Mongoose</li>
                <li>👾 HTML, CSS</li>
            </ul>
        </div>
    )
};

export default About;