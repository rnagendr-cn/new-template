# editorial-data-viz-template
A repository template to get editorial projects started.

---
## Getting started
1. **Do not clone this project**, create a [new repository](https://github.com/new) in GitHub.
2. In the `Repository template` option, select `CondeNast/editorial-data-viz-template`.
3. `Owner` should be `CondeNast`, create a new `internal` repo.
4. Give data-visualization team admin access for the repo.
5. Clone the new repo into local, run `npm install`.

---
## Development

#### Branches
Change `main` to `production` and set it to default. This will be the production branch.
Create a branch `stag` from production. This will be the staging branch.
New features -> create a branch from `main` with the naming structure `feature/name-of-feature`.
#### Folder structure
In **src** -
1. **assets** - images, icons, fonts and all static assets go here under separate folders
2. **layouts** - Layout components like Header, Footer, ArticleSection go here
3. **components** - Contains components like Button, Article, Textbox etc which are used in layouts
4. **data** - JSON / JS / other data go here
5. **hooks** - contains frequently used custom hooks
6. **templates** - contains handlebar templates for plop.js file generation
7. **utils** - contains helper functions used in multiple components for easier access

#### Generating new files
You can generate new components / layouts / hooks / util functions using `npm run plop`. Select the type of file you would like to create and enter the name of the file. The files will be created in the respective folders. Default exports will be auto updated for components and layouts.

#### Styling
1. Colors - declare the values in *data/colors.js* and use them in respective components.
2. Global styling for HTML tags can be found in *data/globalStyles.js*. Add tag level styles like `font-family`, `font-size` and `font-weight` etc there.
3. Font sizes - Add new font files in *assets/fonts* and update the *index.js* in the same folder. Template for font declarations provided. Use [fluid typography](https://css-tricks.com/snippets/css/fluid-typography/) for better UX across screen sizes.

#### Hooks available
1. `useWindowSize` hook can be used to listen to the viewport size changes.

#### Images
Compress very large images without data loss using [Squoosh.app](https://squoosh.app/) or similar services and put them in *assets/images* folder. Update the *index.js* in the same folder.

#### Code formatting
All staged code gets auto formatted when you commit the code - using Prettier and Husky pre-commit hook. Use of Prettier VSCode extension also recommended to instantly preview the formatting changes on save.

---

## Initial Deployment Steps
1. Update `README.md` for project relevant details.
2. If no tests are setup for the project, remove `setupTests.js` and remove the following dependencies
```
  "@testing-library/jest-dom": "^5.11.4",
  "@testing-library/react": "^11.1.0",
  "@testing-library/user-event": "^12.1.10",
```
3. Generate the server files using command
```
  `npm run plop` -> select `server`
  (or)
  `npm run plop server`
```
Verify and check index.js and Jenkinsfile.

4. Refer Data Viz wiki [article](https://cnissues.atlassian.net/wiki/spaces/DV/pages/2056848607/Departures). Complete the remaining steps after *package.json* section.

---

## Deployment checklist
1. No console.log / errors
2. Set up **GA Tracking** by referring to the Developer Resources section in Data Viz Confluence wiki - [here](https://cnissues.atlassian.net/wiki/spaces/DV/pages/1717374274/How+to+Implement+Tracking+in+Editorial) and [here](https://cnissues.atlassian.net/wiki/spaces/DV/pages/2015761159/Tracking)
3. Set up **Proxy Links** by referring to the Developer Resources section in Data Viz Confluence wiki - [here](https://cnissues.atlassian.net/wiki/spaces/DV/pages/2268659759/Proxy+Links+for+Interactive+Overrides)