# Projects Component Structure

This directory contains all the components and data related to the Projects section of the portfolio.

## File Structure

- `Project-Data.js` - Contains all the project data as an array of project objects
- `ProjectCard.jsx` - Component that renders an individual project card
- `README.md` - This file, explaining the structure

## Usage

The main `Projects.jsx` page in `src/Pages/` imports the ProjectsData and ProjectCard component to render the complete Projects section.

## Adding New Projects

To add new projects:

1. Edit the `Project-Data.js` file
2. Add a new project object following the existing pattern
3. Assign a unique ID (increment from the highest existing ID)

See the `PROJECTS-GUIDE.md` in the Pages folder for detailed instructions on project formatting.
