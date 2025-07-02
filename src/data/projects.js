/**
 * Contains array of projects I have done. These data is passed to generate each Project.jsx
 */

const projects = [
  {
    title: "Expense-Tracker",
    description: `Implementation of an expense budget sheet - similar to Google Sheets. This project helps me document products I have purchased.
    Users can specify the type of the product (ex. Books, Video Games, etc.), add columns and delete columns.
    `,
    img: "expense_tracker.png",
    tags: [
      { HTML: "html.svg" },
      { CSS: "css.svg" },
      { JavaScript: "javascript.svg" },
      { TailWindCSS: "tailwindcss.svg" },
    ],
    links: {
      github: "https://github.com/LySabrina/expense-tracker",
    },
  },
  {
    title: "The Odin Project Collection",
    description:
      "Projects done from TheOdinProject specifically from their Node.js path.",
    img: "odin.png",
    tags: [
      { HTML: "html.svg" },
      { CSS: "css.svg" },
      { JavaScript: "javascript.svg"},
      {NodeJS: "nodejs.svg"},
      {"Express.js": "express.svg"},
      {PostgreSQL: "postgresql.svg"}
    ],
    links:{
      github: "https://github.com/LySabrina/odin-project"
    }
  },
  {
    title: "Manga Releases",
    description:
      "Scrapped book information from Seven Seas Entertainment. Each book is stored in a database. A frontend application is used to show the books",
    img: "manga_release.png",
    tags: [
      { HTML: "html.svg" },
      { CSS: "css.svg" },
      { JavaScript: "javascript.svg" },
      { React: "react.svg" },
      { Spring: "spring.svg" },
      { Java: "java.svg" },
    ],
    links: {
      github: "https://github.com/LySabrina/MangaReleases",
    },
  },
  {
    title: "Calculator App",
    description:
      "Every CS student has made this! This is a calculator app with a design from FrontendMentor.",
    img: "calculator.png",
    tags: [
      { HTML: "html.svg" },
      { CSS: "css.svg" },
      { JavaScript: "javascript.svg" },
      { Sass: "sass.svg" },
    ],
    links: {
      demo: "https://lysabrina.github.io/calculator-app/",
      github: "https://github.com/LySabrina/calculator-app",
    },
  },
];

export default projects;
