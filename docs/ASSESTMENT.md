# Catalogue of recipes

## The project

Ever tackled a scenario where you have a strong craving. Nothing more than a tasty treat could dampen that craving. But but but, Cannot find food around. Try cooking yourself ?? But what ....

Let [Healthy Foodie][] come to your rescue..!! Just search by type or by name your desired dish.

## Project specifications

As part of Microverse Students, I have to complete some capstone projects, solo projects at the end of the each of the Microverse Main Technical Curriculum sections. This time is for React section.

The current project is an adaptation to the proposed one, a [Catalogue of Dog Clothes](https://www.behance.net/gallery/24531031/Pimp-my-DOG-Online-store-E-commerse-project) (Design idea by Denys Chagaida on Behance), but adapted in this case to be a catalogue of recipes. As stated on the description I changed the subject (also I did not found any API on dog clothes :sad: ). I decided to make a catalogue of recipes. It would be useful and flashy; who doesn't loves to see pics of food!

In this project I tried to follow best practices, set stylelint and Eslint as code linters, used gitflow, tested some business logic, tried to write good commit messages and an informative README, always following best practices in react and redux development, like using a nice folder/files structure with good names and separate different types of components and services.

## Technical mandatory requirements of the project

- [x] The project is a single page application built with React and Redux

In fact I used `create-react-app` and the installed redux on top.

- [x] The data that was retrieved from the API should be stored in the Redux store

The store called [`recipes`](../src/redux/reducers/recipes.js) saves the API calls in-memory.

- [x] You should filter the data that you retrieve from the API using a Filter stateless component

The filtering component is called [`FilterButton.js`](../src/app/recipe/FilterButton.js) and is stateless.

- [x] Every page, the main page and pages for each item, should have a unique route within the SPA

In the router inside the [`App.js`](../src/App.js) you can see that all the detail views have a unique path.

- [x] The project should be deployed and accessible online

You can visit online on [Healthy Foodie][]

## Nice to have requirements

- [x] Test your app using specific testing tools for the framework, like [React Testing Library][]

Inside of `src/` folder you can find some tests.

- [ ] Use [CSS modules](https://css-tricks.com/css-modules-part-1-need/) to style the React app

I used Bootstrap at the end.

- [x] Use [React Hooks](https://reactjs.org/docs/hooks-intro.html) for this app

Most of the components are amanges by hooks.

## Project Presentation

This project is a catalogue of recipes, a browsable list of recipes that can be fltered and each recipe have it's own view of details.

For achieving this I used React, a popular and perfomant javascript library especialized in reflect state changes in the DOM, as well as Redux, a state managment javascript package. Both of them in top of the official webpack project named `create-react-app`, used to easily and fast start projects.

The app contains basically 2 views:

- one page with a list of recipes that could be filtered by common factors as origin or type of food. I use these filters:
  - Vegan
  - Italian
  - Chinese
  - French
  - Main Course
  - Dessert
  - Salad
  - All
- The second view is a details view for each recipe. In such page we see a photo (if available), the name, categories it have, a description, the ingredients and a link to the full recipe.

To have data I used [Spoonacular's Food API](https://spoonacular.com/food-api) of recipes, but requested from the app using `axios`, a popular `fetch` alternative. For routing I used `react-router`, the de-facto router solution in react. Finally, for styling I leverages a custom Bootstrap 4's theme, taken from [https://bootstrap.build](https://bootstrap.build/app), using a modified version of its Sketchy theme along some icons taken from [Icons8](https://icons8.com).

### Using React and virtual DOM concepts

The most basic react concept is a Component, which I used as much as possible. To be able to componetize the app the first step was to divide the desired views into sections. Then each section divided even more while needed. For creating efective components I had to choose a good balance between isolation and universality, as sometimes is needed to mix those two concepts. Another way to create components is thinking in state and stateless components, and I did try to separate state as much as possible, favoring stateless components as much as possible.

For good practice in react I tried to stick with the most known:

- While used JSX I tried to separate big chunks of code away. Also while conditionals where needed used short circuit. No asignments in render.
- Validate props when possible, starting with existence tests and then type tests.
- Used React components lifecycle methods while possible, but tried to stick with basic ones like `useEffect` (similar to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`), mostly to handle API calls.
- Used DOM events listeners in components, most prominently `onChange`, `onSubmit` and `onClick` events.
- Used lifting to pass state from children to parent components, for example on [`FilterButton.js`](../src/app/recipe/FilterButton.js), where each button have the value on the parent.
- Used client side routes, in this case with help of `react-router` package.

### Data flow Using Redux

In this app we have the normal Redux/Flux strict unidirectional data flow, this means that all data in the application follows the same lifecycle pattern, making the logic of the app more predictable and easier to understand. It also encourages data normalization, so that we don't end up with multiple, independent copies of the same data that are unaware of one another

In my case the flow is like this:

1. Call an action from the components. For example while pressing a button inside [`FilterButton.js`](../src/app/recipe/FilterButton.js) the `SET_FILTER_BUTTON_VALUE` action is activated, passing a recipe as payload (later a `SEARCH_RECIPE` action is chained).
2. In `src/redux/reducers` a reducer is called. In the case of the filter button, the reducer is in the file [`setFilterButtonValue`](../src/redux/actions/setFilterButtonValue.js).
3. The root reducer may combine the output of multiple reducers into a single state tree. This combiner is in the file [`store.js`](../src/redux/store.js).
4. The Redux store saves the complete state tree returned by the root reducer. This new state is accesible by componets via the `<Provider>` and `useReducer` Hook, for example in [`src/app/recipe/index.js`](../src/app/recipe/index.js), line 16, `getRecipes`, we get the new list of recipes to render.

![Redux Flow][]

- Used Redux store to keep state, in my case was barebones without much ado like `redux-thunk` or `redux-saga`.
- Connects Redux to React app (includes map state and dispatch to props). This is done most of all in [`src/index.js`](../src/index.js) (Set Provider) and in [`src/app/recipe/index.js`](../src/app/recipe/index.js) (consumes state and dispatch actions).

## Why using redux in this app

Redux is useful here in order to mantain order on the data, also for let this app being scalable and easily mantainable for othe deves. While this app is not big enought (Context API can be used instead), by using redux the app can grow easily by just add more reducers + actions.

## What excited Me the most about software development during Microverse course

- Being part of a team with responsabilities and help each others
- Learned how to make pair programming and efective code reviews
- Learned to translate business requirements into software solutions
- Learned SQL, Ruby and Ruby on Rails
- Improved my CSS skills, my Javascript code and my react and redux skills
- Improved my Ability to multitask and effectively manage time and prioritization
- Improved my English written and verbal communication
- Improved my skills deploying apps
- Learned how to use linters
- Improved my skill to Maintain professional Github repos

[Catalogue of Dog Clothes]: https://www.notion.so/Catalogue-of-Dog-Clothes-8bf1512b8ab34fa28848beb8ab698a32
[Healthy Foodie]: http://healthy-foodie.surge.sh
[React Testing Library]: https://github.com/testing-library/react-testing-library
[Redux Flow]: https://i.imgur.com/riadAin.gif
