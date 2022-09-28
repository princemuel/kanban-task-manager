# Kanban Task Manager

A Kanban board is an easy-to-use agile project management tool using the Kanban methodology that helps you to visualize and manage workflows. It can be physical or digital and features columns representing stages of a process. Cards are used to track individual tasks and activities as they progress through the stages.

![Design preview](./preview.jpg)

## Table of contents

- [Kanban Task Manager](#kanban-task-manager)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [The challenge (Situation)](#the-challenge-situation)
    - [Expected Behaviour (Tasks)](#expected-behaviour-tasks)
    - [Steps (Action)](#steps-action)
  - [Deploying your project](#deploying-your-project)
    - [What I learned](#what-i-learned)
    - [Share Project](#share-project)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

This project uses the STAR approach. Read more about the Kanban methodology in the following articles

- [Kanban](<https://en.wikipedia.org/wiki/Kanban_(development)>)
- [Kanban Board](https://en.wikipedia.org/wiki/Kanban_board)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete boards and tasks
- Receive form validations when trying to create/edit boards and tasks
- Mark subtasks as complete and move tasks between columns
- Hide/show the board sidebar
- Toggle the theme between light/dark modes
- **Bonus**: Allow users to drag and drop tasks to change their status and re-order them in a column
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if not building out a full-stack app)
- **Bonus**: Build this project as a full-stack application

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Frontend Repo](https://your-solution-url.com)
- Solution URL: [Backend Repo](https://your-solution-url.com)
- Live Site URL: [Live Site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For component composition and styles
- [Tailwind CSS](https://tailwindcss.com/docs) - For utility classes

### The challenge (Situation)

The users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete boards and tasks
- Receive form validations when trying to create/edit boards and tasks
- Mark subtasks as complete and move tasks between columns
- Hide/show the board sidebar
- Toggle the theme between light/dark modes
- **Bonus**: Allow users to drag and drop tasks to change their status and re-order them in a column
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if not building a full-stack app)
- **Bonus**: Build this project as a full-stack application

### Expected Behaviour (Tasks)

- Boards
  - Clicking different boards in the sidebar will change to the selected board.
  - Clicking "Create New Board" in the sidebar opens the "Add New Board" modal.
  - Clicking in the dropdown menu "Edit Board" opens up the "Edit Board" modal where details can be changed.
  - Columns are added and removed for the Add/Edit Board modals.
  - Deleting a board deletes all columns and tasks and requires confirmation.
- Columns
  - A board needs at least one column before tasks can be added. If no columns exist, the "Add New Task" button in the header is disabled.
  - Clicking "Add New Column" opens the "Edit Board" modal where columns are added.
- Tasks
  - Adding a new task adds it to the bottom of the relevant column.
  - Updating a task's status will move the task to the relevant column. If taking on the drag and drop bonus, dragging a task to a different column will also update the status.

### Steps (Action)

1. Configure repository to publish code to a web address.
2. Look through the designs to start planning out how to tackle the project. This step is crucial to help plan ahead for CSS classes to create reusable styles.
3. Before adding any styles, structure content with HTML.
4. Write out the base styles for the project, including general content styles, such as `font-family` and `font-size`.
5. Start adding styles to the top of the page and work down. Only move on to the next section if the current section is completed.

## Deploying your project

Hosting Choices:

- Frontend
  - [Vercel](https://vercel.com/)
  - [Netlify](https://www.netlify.com/)
  - [Cloudflare Pages](https://pages.cloudflare.com/)
  - [Firebase Hosting](https://firebase.google.com/docs/hosting)
  - [Heroku](https://www.heroku.com/)
  - [Repl.it](https://repl.it/)
  - [Render](https://render.com/)
- Backend
  - [Heroku](https://www.heroku.com/)

### What I learned

Use this section to recap over some of the major learnings while working through this project. Writing these out and providing code samples is a great way to reinforce knowledge.

**Code Snippets Examples**:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```ts
const proudOfThisFunc = () => {
  console.log('🎉');
};
```

Check out the [The Markdown Guide](https://www.markdownguide.org/) for help with writing markdown.

### Share Project

There are multiple places to share details about the project and receive feedback

1. Post the project's links on **#finished-projects** channel of the [Slack community](https://www.frontendmentor.io/slack).
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet.
3. Post about the project's progress on [LinkedIn](https://linkedin.com/).
4. Blog about experiences building the project. Writing about the workflow, technical choices, and talking through the code is a brilliant way to reinforce what was learnt. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

### Continued development

This section is to outline areas where continued focus is needed in future projects. These could be concepts you're still not completely comfortable with or useful techniques to be refined and perfected.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Prince Muel](https://www.your-site.com)
- Twitter - [@iamprincemuel](https://www.twitter.com/iamprincemuel)
- LinkedIn - [@princemuel](https://www.linkedin.com/in/princemuel)
- Frontend Mentor - [@princemuel](https://www.frontendmentor.io/profile/princemuel)

## Acknowledgments

Give hat tips to anyone who helped out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
1
