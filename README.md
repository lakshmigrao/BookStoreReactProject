# BookStoreReactProject

Project Title: Bookstore App

Bookstore is an App that provides the details of any book when the user searches with the title name, author's name or any word related to the description. This is a React JS project developed using Google API to fetch the details of books.

Live Link: 
https://magnificent-starlight-40156a.netlify.app/

About the Project:

This project lets the user search for a book with title name, authors name or a word from description. From the search results, the user can add a book to MyBooks list or click on the book to get more details.
The first page is the homepage of the app. There is a navigation tab which gives different categories of books. On clicking each tab takes the user to the dedicated pages where books of different category are displayed. There is a search tab on homepage where books can be searched. MyBooks tab on the navigation bar takes the user to MyBooks page. When books are displayed, there is an "Add to My Books" button with each book. When the button is clicked, that book is saved into MyBooks. There is an option to remove a book from MyBooks too. When the button "Remove" with each book on the My Books page is clicked, that book is removed from MyBooks. There is a “Remove All” button on MyBooks pages and when clicked, all the books in MyBooks will be removed.  There is a "go back" button on each page which takes the user to previous page. The MyBooks list is stored using localStorage, hence the MyBooks data is not lost when the page is refreshed. 

Screenshots:

1.	This is the Homepage.
 


2.	This is the page when the searched item is fetched. The User can open each book for more details or add the books to the MyBooks.

 


3.	This is the book details page which gives the users details on each book. There is a goback button to go back to the previous page.

 


4.	When the user clicks the “Add to MyBooks”, the book is added to the MyBooks.
 

5.	The user can go to My Books tab on navigation bar and a page with all the books added to My Books is displayed. There is a Remove button with each book when clicked removes the book and Remove All button removes all the books in My Books.

 
6.	There is a tab in Navigation bar for which each category of books and clicking on that leads the user to the page that gives the books under each category.
 





Technologies Used:

React, JSX, CSS, Google API

Setup/Installation:

1. Open Gitbash where the project folder needs to be created.
2. Run  
    npx create-react-app bookapp: where bookapp is the name of project.

    When project folder is successfully created:
3. Type
    cd bookapp
4. Run
    npm install react-router-dom: This is to install React Router.
5. Download the zip folder from 
https://github.com/lakshmigrao/BookStoreReactProject.git
6. Unzip it into bookapp folder.
7. Open the Visual Studio Code and open the folder bookapp.
8. Visual Studio Code will be opened. Type npm start on the terminal bash      and the web browser opens on http://localhost:3000


Approach:

Bookstore Project lets the user to search for a book by word/words related to the book in the search box. The search word/s is/are wrapped in the URL to fetch data from the Google Books API. Once the data is received, the structure of data object is studied and what details to be displayed on the browser is decided. All the books in the data are displayed on the browser. The user can click on any book to get more details.  A book element in the data object does not have a unique value, so a combination of title and isbn of book is used to decide the path. When a book is clicked, a new page named bookDetails page opens with path using title and isbn. Using React’s useParams (), the title and isbn is retrieved in BookDetails page using which all the details about the book is displayed. There is a goback button on the bookDetails page that takes user to the previous page. The user can add as many books as possible to MyBooks from the Homepage. MyBooks data is stored in localStorage and is not lost when the browser is refreshed. The user can delete a book or all books from MyBooks. Different tabs in the navigation bar takes the user to different pages which displays different categories of books.


Status:

The Bookapp project is completed.









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

