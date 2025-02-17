<a id="readme-top"></a>

# StressLess

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#issue-tracker">Issue Tracker</a></li>
        <li><a href="#minimum-viable-product">Minimum Viable Product</a></li>
        <li><a href="#project-directory-structure">Project Directory Structure</a></li>
      </ul>
    </li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#milestones">Milestones</a></li>
    <li><a href="#authors">Authors</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## Overview

A customizable time management web app that creates schedules of when to work on assignments based on personal user preferences.

### Issue Tracker (Trello)

https://trello.com/b/qHGNCIJI/stressless

### Minimum Viable Product

- Users can input activities (both recurring and one-time) they must do, including class time, assignments, extracurricular activities, work hours, meal times, and sleep times.
- Users will fill out an initial survey to input preferences for productivity times, free time, sleep/wake up times, and work/break preferences.
- The app designs a weekly routine for an academic semester that caters to the user’s commitments and preferences.
- Users can update their planned activities and regenerate the calendar.
- Notifications for upcoming deadlines and important events.

### Project Directory Structure

```
StressLess/
├── backend/
    ├── src/
        ├── index.ts (entry point)
    ├── .gitignore, package.json, tsconfig.json
    ├── README.md (read to set up environment)
├── frontend/
    ├── public/
        ├── index.html
        ├── manifest.json
        ├── .ico, .png
    ├── src/
        ├── App.tsx, App.css
        ├── index.tsx, index.css
        ├── App.test.tsx
        ├── setupTests.ts
    ├── .gitignore, package.json, tsconfig.json
    ├── README.md (read to set up environment)
├── reports/
├── README.md
├── .gitignore
├── .prettierrc, .prettierignore (code formatter)
```

- The `reports` directory contains the reports for each milestone or sprint.
- Upon updating the project, please update this README with the new directory structure.
- Add files/folders that should not be committed to git in the `.gitignore` files in the root, `backend`, or `frontend` directories as suitable.
- NEVER commit `.env` files or any sensitive information to the repository.
- Always document new technology and how to start things up in the README.
- Use `pnpm` instead of `npm` for commands.

## Tech Stack

- Frontend:
+   React
+   TypeScript
- Backend:
+   Node
+   TypeScript
+   Express
- Database:
- Authentication:
- Others:

## Getting Started

### Prerequisites (Set up environment)

- [Set up Node.js and pnpm](https://pnpm.io/installation)
- [Set up React development environment](https://builtin.com/software-engineering-perspectives/create-react-app-typescript)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/trappaly/StressLess
cd StressLess
```

2. Set up Code Formatter ([Prettier](https://prettier.io/)):

```bash
```

### Development
You can either go into each directory and start the backend and frontend separately or use a tool like `concurrently` to run both at the same time.
Read each README in the `backend` and `frontend` directories for more information. or follow the steps below:

3. Start the backend:

```bash
cd backend
pnpm install
pnpm start
```

4. Start the frontend:

```bash
cd frontend
pnpm install
pnpm start
```

## Milestones

- [x] Milestone 1 - Requirements
- [ ] Milestone 2 - Git Setup
- [ ] Milestone 3 - Paper prototyping
- [ ] Milestone 4 - Feedback & Iteration
- [ ] Milestone 5 - Design & Architecture
- [ ] Milestone 6 - Testing & CI
- [ ] Milestone 7 - Release 1 and demo
- [ ] Milestone 8 - Documentation
- [ ] Milestone 9 - Code Review and demo
- [ ] Milestone 10 - Bug logging
- [ ] Milestone 11 - Final Presentation
- [ ] Milestone 12 - Final Release

## Authors

- Alyssa
- Madel
- Nifemi
- Cheyanne
- Tim
- Khanh

## Acknowledgments

<a href="#readme-top">back to top</a>
