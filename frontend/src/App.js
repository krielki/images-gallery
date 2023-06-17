import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    // 6.7.
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
    // 7.3.
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      setWord('');
  }

  return (
    <div className="App">
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
};

export default App;

/* SEARCH COMPONENT SUMMARY (section 6)
6.1. Used useState hook in order to define the initial value of the word and word is part of the state of this component.
Function setWord - we can utilize to update the value of word.
6.2. Passed word and setWord as properties to search component.
6.3. We've defined inside of app component handleSearchSubmit function that will perform some actions when we press the search button.
It will send fetch API request, and now this function has access to the word variable.
This function is also passed as property to search component.

6.4. Inside of search component, we retrieve those three variables out of properties.
6.5. Inside of form, we added onSubmit property and any time search button is clicked, the handleSubmit function will be called.
6.6. Inside of Form.Control, we've used word and setword properties
Value of this form is connected to app component - it shows value of the word variable,
and whenever you change this input, it calls the onChange function and we update with help of setword, the value of the word variable inside of app component.
Removing the onChange function, results in not being able to type in the search box in the web browser - type, but nothing appears - because the state of the application doesn't update (word value remains unchanged)

6.7. we use word here to have access to search word enetered by user and we can use this word to send page api request
    Create api key to utilize in order to send request to unsplash api
    (fist commit changes - controlled search component) 

MAKING UNSPLASH API REQUESTS (section 7)
ADDING LOCAL FILE WITH ENVIRONMENT VARIABLES
7.1. Environment variables in our application:
Every node.js application has access to the global variable called process - it is an object, and inside of it there is a property called env ;
and this property holds all of the environment variables of the application.
NOTE: All environement variables are located in the process.env object

NOTE: Node.js id used to run create-react.app application in developmemnt mode.
That's why it has access to the global Node.js variable named process

NOTE: When you create optimized production build using npm run build, all environment variabkes will be injected into the resulting bundle
This is because resulting production build is running solely in the web browser and web browsers don't have global variable "process"

7.2. Try to access environment variables directly in app component:
console.log(process.env.REACT_APP_UNSPLASH_KEY); (removed after creating the variable)

NOTE: Details about environment variables handling in React apps bootstrapped using create-react-app you can find here: https://create-react-app.dev/docs/adding-custom-environment-variables/

NOTE: Current environement is determined by the environment variable NODE_ENV that is set to:
1. "development" when you run application in development mode (npm start)
2. "production" when you create production build (npm run build)

NOTE:
All custom environemnt variables you want to insert into the React application must have REACT_APP_ prefix

7.3. fetch request
we call this function (enter actual URL that we want to get data from)
in JS there is string template literal that allows you to insert variables into specific strings
if you want to insert string template literal, you need to insert a pair of back ticks: ``

7.4. In order to insert a variable in JS string template literal you need to use this syntax: ${}
You can insert any variable name / JS expression
*/            