# Jiko Shoukai | 自己紹介

Portfolio website named "jiko shoukai," which translates to "self-introduction" in Japanese. Built using Svelte and designed to showcase a collection of categorized projects I've worked on.

## Features

- Filter and Display Projects: Users can filter projects by categories such as installations, performances, releases, talks, and programming.
- Responsive Design: The site is styled with TailwindCSS, ensuring it is responsive and visually appealing on various devices.
- Dynamic Content Handling: Projects and their details are dynamically managed and displayed using Svelte components.

## Prerequisites

- Node.js and npm installed on your local machine.
- Recommended: Familiarity with Svelte, TailwindCSS, and TypeScript.

## Getting started

### Creating a project

To generate a new Svelte project, use the following commands:

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Development Workflow

To begin working on the project locally:

1. Install the dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment..
