import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title = "Welcome to the new blog";
  // const likes = 50;
  // const person = {name: 'David', age: 30};
  // const link = "https://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="create" element={<Create/>} />
            <Route path="blogs/:id" element={<BlogDetails/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          {/* <p>Liked { likes } times</p>
          <p>{ person.name }</p>
          <a href={link}>Google site</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
