import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';



const App = () => {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    /* we use word here to have access to search word enetered by user and we can use this word to send page api request
    Create api key to utilize in order to send request to unsplash api
    (fist commit changes - controlled search component) 
    */
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
1. Used useState hook in order to define the initial value of the word and word is part of the state of this component.
Function setWord - we can utilize to update the value of word.
2. Passed word and setWord as properties to search component.
3. We've defined inside of app component handleSearchSubmit function that will perform some actions when we press the search button.
It will send fetch API request, and now this function has access to the word variable.
This function is also passed as property to search component.

Inside of search component, we retrieve those three variables out of properties.
Inside of form, we added onSubmit property and any time search button is clicked, the handleSubmit function will be called.
Inside of Form.Control, we've used word and setword properties
Value of this form is connected to app component - it shows value of the word variable,
and whenever you change this input, it calls the onChange function and we update with help of setword, the value of the word variable inside of app component.
Removing the onChange function, results in not being able to type in the search box in the web browser - type, but nothing appears - because the state of the application doesn't update (word value remains unchanged)

*/            