# How to Add and Customize Projects

This document explains how to add new projects or modify existing ones in your portfolio.

## Project Data Location

Project data is stored in a dedicated file:

- Path: `src/Components/Projects/Project-Data.js`
- Format: JavaScript array of project objects
- Export: Default export (`export default ProjectsData`)

## Project Structure

Each project in the `ProjectsData` array in `Project-Data.js` has the following structure:

```javascript
{
  id: 1,                     // Unique identifier for the project
  title: "Project Name",     // Title of the project
  description: "...",        // Description of what the project does
  image: "",                 // Leave empty to use default image
  technologies: [            // Array of technologies used
    "React",
    "Tailwind CSS",
    // Add more technologies here
  ],
  links: {                   // Object containing links (all are optional)
    live: "https://example.com",             // Link to live demo
    github: "https://github.com/user/repo",  // Link to GitHub repository
    linkedin: "https://linkedin.com/..."     // Link to LinkedIn project
  }
}
```

## Adding a New Project

To add a new project:

1. Open `src/Components/Projects/Project-Data.js`
2. Find the `ProjectsData` array
3. Add a new object following the structure above
4. Assign a unique `id` (increment from the highest existing ID)
5. Save the file

### Example:

```javascript
export const ProjectsData = [
  // ... existing projects
  {
    id: 4, // Increment from highest existing ID
    title: "New Project",
    description: "Description of your new project",
    image: "/images/new-project.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    links: {
      live: "https://example.com",
      github: "https://github.com/yourusername/new-project",
      // Omit any links you don't have
    },
  },
];
```

## Project Images

### Option 1: Use Default Image

- Leave the `image` field empty (`""`) to use the default project image
- Example: `image: ""`

### Option 2: Use Your Own Images

- For custom images, you have two options:

  1. **Import directly in the component** (Recommended)

     - Place your images in `src/assets/images/ProjectImages/`
     - Then import them in the `ProjectCard.jsx` component
     - This requires modifying the component code

  2. **Using public folder** (Not currently working)
     - This option requires additional configuration
     - Contact the developer for help with this option

- Recommended image dimensions: 800x600 pixels (landscape orientation)

## Links

Each project can have up to three types of links:

- `live`: Link to a live demo of the project
- `github`: Link to the GitHub repository
- `linkedin`: Link to the project on LinkedIn

These links are optional - only the ones you provide will be displayed.

## Modifying Existing Projects

To modify an existing project:

1. Find the project in the `ProjectsData` array by its `id`
2. Update the properties you want to change
3. Save the file
