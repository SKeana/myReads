import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <meta charSet='UTF-8'></meta>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
        <title>MyReads</title>
      </head>
      <body>
        <header>
          <h1>My Reads</h1>
          <nav>
            <li>
              <ul><a href='index.js'>Home</a></ul>
              <ul><a href='findSomethingNew,js'>Finding Someting New</a></ul>
              <ul><a href='review.js'>Review Books</a></ul>
              <ul><a href='tBR.js'>To Be Read</a></ul>
            </li>
          </nav>
        </header>
      </body>
    </div>
  );
}

export default App;
