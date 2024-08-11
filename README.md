## Descriuption
Safari is a commercial trading project created for educational purposes to demonstrate React.js skills on the front-end side of the project. Safari is a Single Page Application (SPA) with internal pages including:

Project description
Comments
Project selection page
Cart page
Favorites page
Login page
Registration page
Accessories page
Shoes page
Clothes page
The project is built using lazy loading, which speeds up the loading of the application by tracking which page is in use.

<img width="500" alt="Снимок экрана 2024-08-11 в 13 08 45" src="https://github.com/user-attachments/assets/f1e3f4af-16d7-44cd-8218-ea23ba0f9afa">


The project is designed in such a way that the array of all products is fetched from the server only once at the top level of the project. After that, it is passed to the necessary components via props. This approach is intended to reduce the load on the application.
To hide loading screens, a skeleton component was written.

<img width="468" alt="get_request" src="https://github.com/user-attachments/assets/31d92dbe-50fa-4c6a-b88b-6fcfdd8cd2a5">

<img width="500" alt="castom_hook" src="https://github.com/user-attachments/assets/73e2b768-474b-4684-8ef9-65ca18636fdf">

<img width="500" alt="getProducts" src="https://github.com/user-attachments/assets/dd0b84b8-4870-47c4-9911-35b35dc9792c">


In this project, I did not use frameworks or ready-made code for pagination integration and preferred to implement it myself.

<img width="500" alt="pagination" src="https://github.com/user-attachments/assets/9fb5ec6c-2593-43c1-82ab-485c8f51c66a">

In the application, all actions are synchronized with the server. Each action, such as:

Cart operations: deletion, modification, addition
Favorites operations: deletion, modification, addition
Rating: modification
Comments: addition, deletion
is synchronized with the server.


In browsing mode, the purchase and favorites options are not available, but they become accessible after authentication.

<img width="500" alt="autorization" src="https://github.com/user-attachments/assets/43762bd0-ab89-4043-8ad6-b82611b067b8">

## object structure of each element on the server

<img width="577" alt="object" src="https://github.com/user-attachments/assets/99a0ebb2-768f-4a90-8e1f-49cdeb05eed8">

## Each page has navigation by product on a variety of topics
-color
-price 
-mozhel

<img width="500" alt="filtration" src="https://github.com/user-attachments/assets/9c393d10-10b6-4d39-96cb-009d7031c5bc">

<img width="500" alt="filters" src="https://github.com/user-attachments/assets/abe5582f-5595-49d3-8313-b9bb30b2ca27">


## since this project was implemented without a back-end, filtering also occurs on the front-end side

<img width="500" alt="price" src="https://github.com/user-attachments/assets/a29fe60b-fd44-429b-b179-4764884eba98">



## Technologies

Redux Toolkit (@reduxjs/toolkit)
React Testing Library (@testing-library/react, @testing-library/jest-dom, @testing-library/user-event)
Axios (axios)
GitHub Pages (gh-pages)
React (react, react-dom)
React Flickity Component (react-flickity-component)
React Hook Form (react-hook-form)
React Icons (react-icons)
React Redux (react-redux)
React Responsive Carousel (react-responsive-carousel)
React Router DOM (react-router-dom)
React Scripts (react-scripts)
React Select (react-select)
Sass (sass)
Styled Components (styled-components)
Web Vitals (web-vitals)


## Available Scripts

In the project directory, you can run:

### `npm start`


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
