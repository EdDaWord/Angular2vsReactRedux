# AngularJS 2.x vs React + Redux

This is a comparison of AngularJS 2 and React + Redux. The purpose of this comparison is to see the pros and cons of each framework when dealing with MVC, API Calls, and Componentization of UI.

## [AngularJS 2](https://angular.io/)
- AngularJS 2 can be written in TypeScript, Dart, or Vinilla JavaScript.
- Only TypeScript documentation exists right now. (Dec 7, 2016)
  
  #### [TypeScript](www.typescriptlang.org)
  - TypeScript ⊇ JavaScript
  - Mistakes (associated with types) can be found during transpilation.

### Architecture

 (1) Modules `// Functionally the root node of a set of components/services.`
 (2) Components `// Controller to a view`
 (3) Templates `// HTML`
 (4) Metadata `// decorators, which help angular understand a component/module`
 (5) Data binding `// The way which the DOM & Component communicate`
 (6) Directives `// Attributes on an HTML element`
 (7) Services `// A class with a narrow, well-defined purpose`
 (8) Dependency injection `// Which components/modules are needed`
 

## [React](https://facebook.github.io/react/)
- The view of MVC.
- Tree structure made of components, with single root node.
- Remove both async behavior and direct DOM manipulation from your view.
- Uni-directional data flow.
- [ReactJS style guide](https://github.com/airbnb/javascript/tree/master/react)

### Languages 
- JSX and Vinilla JavaScript.

#### JSX
- React's version of HTML (camelCase instead of snake-case).
- JSX is treated like a JS object after compilation.

### ReactJS

#### Component
- Indpendent and reusuable UI pieces. 
- Accept input in the form of `props` (Arguments which are allowed to change).
- May have it's own storage in the form of `state` (Local variables).
- Has lifeCycle functions (pre-defined function interfaces which get called at different stages)
  - Example: `render()` gets every time component state changes (`setState` is called) or new `props` are passed from the parent function.
  - Example: `componentWIllUnmount()` gets called after the component is unmounted from the dom. Use case would be to delete an tight polling function (interval).

  ##### State
  - The component's local memory. Always use `setState()` when updating state.
  - If you don’t use these variables in render, it should not be in the state. State is similar to props, but it is private and fully controlled by the component.

  ##### Props
  - The variables passed in by the component's parent.
  - Read only, Components are “pure” functions. They do not modify the props that they’re passed

  ##### [Event Handling](https://facebook.github.io/react/docs/handling-events.html)
  - For event handling to work, extra binding must be done within the constructor of a component. `this.onAddPersonClick = this.onAddPersonClick.bind(this);`
  - To prevent default behavior `e.preventDefault()` must be called within the event handler.

  ##### [Conditional rendering](https://facebook.github.io/react/docs/conditional-rendering.html)
  - Can be done inline in the JS where the JSX are just elements assigned to JS variables. Or it can be done in the JSX returned in render when surrounded with `{...}`. 

  ##### Lifting state
  - Unlike 2-way binding, you have to propergate an event handler down (via props) and call said handler to change the state of a parent (or grandparent++). This means more boilerplate. But makes debugging easier.

#### [Presenters and Containers](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.7p38ctxlh)
- Design pattern for ReactJS

 ##### Presenter components
 - Get data through props, and display data.
 - Usually have DOM markup (JSX) of it’s own and contains Styles of it’s own.
 - Have no dependencies on the rest of the app: Redux Stores
 - Don’t specify how the data is loaded or mutated
 - Receive data and callbacks exclusively via props (what’s passed in via the parent).
 - Rarely have their own state, when it does it’s UI state rather than data
 - Written as `functional components` unless they need state, lifecycle hooks, or performance optimizations
 - Examples: Page, sidebar, Story, UserInfo, List
 `//ReactRedux-table/src/presenter`

 ##### Container component:
 - Are concerned with how things work
 - Usually don’t have DOM markup (JSX) of it’s own except for wrapping divs, and no styles for itself
 - Provide the data and behaviors to presenter components or other container components (it’s children)
 - Call Redux actions and provide these as callbacks to the presentational components
 - Serve as a data source (Stateful)
 - Usually generated using higher order components: 
  - connect() → React + Redux,
  - createContainer() → Relay
  - Container.create() → Flux Utils
 - Examples: UserPage, FollwersSidebar, StoryContainer, FollowedUserList
 `//ReactRedux-table/src/containers`

##### [Thinking in React / thinking in components](https://facebook.github.io/react/docs/thinking-in-react.html)
- A great example of thinking with React

### Redux
- Get away from the complexity of mixing mutation and asynchronicity.

#### Single Source of Truth
- The whole state of your app is stored in a single object tree inside a single store.
- The only way to change the state tree is to emit an action (an obj which describes what happened)
- The way these actions transform the state tree is via pure reducers which you write.
```
{
  people: {
    1: {
      id: 1,
      first_name: ed1,
      last_name: wang1
    },
    2: {
      id: 2,
      first_name: ed2,
      last_name: wang2
    },
    3: {
      id: 3,
      first_name: ed3,
      last_name: wang3
    }
  },
  fetchedPeople: {
    isFetching: false,          // For showing a spinner
    didInvalidate: false,       // to show that data is stale
    lastUpdated: 1439478405547, // time which the API was called
    peopleIds: [ 1, 2, 3 ]
  }
}
```
#### State is read-only
- The only way to change the state is to emit an action.
- This ensures that neither the views nor the network callbacks will ever write directly to the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

#### Changes are made with pure functions
- Pure functions will have the same result for a given input at any point. They are not effected by outside elements and don't mutate the arguments which are passed in.

#### Middleware
- In most frameworks, middleware is some code you can put between the framework receiving a request, and the framework generating a response.
- Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

#### Async Actions (API)
- Use [Redux Thunk middleware](https://github.com/gaearon/redux-thunk)
- Example `./ReactRedux-table/`
