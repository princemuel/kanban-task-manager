# Kanban Task Manager

- [Kanban Task Manager](#kanban-task-manager)
  - [Sprint 1: Foundation and Core Functionality](#sprint-1-foundation-and-core-functionality)
    - [Expected Behaviour (Tasks)](#expected-behaviour-tasks)
  - [Sprint 2: Foundation and Core Functionality](#sprint-2-foundation-and-core-functionality)

## Sprint 1: Foundation and Core Functionality

- Duration: 2-3 weeks

**User Stories:**

- [ ] As a User, I want to create an account and log in to the Application
- [ ] As a User, I want to create Create, Read, Update, and Delete boards and tasks
- [ ] As a User, I want to receive form validations when trying to create/edit boards and tasks
- [ ] As a User, I want to mark subtasks as complete, and move tasks between columns
- [ ] As a User, I want to hide/show the board's sidebar on tablets and deskop systems
- [ ] As a User, I want to toggle the theme between light/dark modes, and also respect the user's default system theme preference
- [ ] As a User, I want to drag and drop tasks to change their status and re-order them in a column
- [ ] As a User, I want to view the status of my existing tasks, including the subtasks

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

## Sprint 2: Foundation and Core Functionality

- Duration: 2-3 weeks

**User Stories:**
