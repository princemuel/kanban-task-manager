# Kanban Task Manager (In Progress)

The Kanban board is an easy-to-use agile project management tool using the Kanban methodology that helps you to visualize and manage workflows. It can be physical or digital and features columns representing stages of a process. Cards are used to track individual tasks and activities as they progress through the stages in a production pipeline. Tasks are arranged in columns according to their current status such as 'todo', 'doing' and 'done'. Columns can be added and named to be more specific to the needs of the team. The board allows the team to track potential bottlenecks in the pipeline if too many tasks end up sitting in one column. It also allows the team to estimate lead times for tasks in the pipeline.

![Design preview](./preview.jpg)

## Table of contents

- [Kanban Task Manager (In Progress)](#kanban-task-manager-in-progress)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Project Links](#project-links)
  - [My process](#my-process)
    - [Building with](#building-with)
    - [The challenge (Situation)](#the-challenge-situation)
    - [Expected Behaviour (Tasks)](#expected-behaviour-tasks)
  - [Author](#author)

## Overview

This project uses the STAR approach. Find out more about the Kanban methodology using the following resources

- [Kanban](<https://en.wikipedia.org/wiki/Kanban_(development)>)
- [Kanban Board](https://en.wikipedia.org/wiki/Kanban_board)
- [Microsoft Devops](https://learn.microsoft.com/en-us/devops/plan/what-is-kanban)
- [Atlassian](https://www.youtube.com/watch?v=iVaFVa7HYj4)

### Screenshot

![Kanban Task Manager](./screenshot.jpg)

### Project Links

Press <kbd>.</kbd> on the keyboard to view this project's code in the _`github.dev`_ code editor just like in _`Visual Studio Code`_

- Solution URL: [Repository](https://github.com/princemuel/kanban-task-manager)
- Live Site URL: [Live Site](https://kanban-tm.vercel.app/)

## My process

### Building with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/docs) - For composing component styles using utility classes

### The challenge (Situation)

View the User Stories at the [User Stories Markdown File](./user-stories.md)

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

## Author

- Website - [Samuel Chukwuzube](https://princemuel.vercel.app/)
- LinkedIn - [@princemuel](https://linkedin.com/in/princemuel/)
- Twitter - [@iamprincemuel](https://twitter.com/iamprincemuel)
