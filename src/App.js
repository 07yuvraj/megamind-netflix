import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import GenreScreen from './screens/GenreScreen'
import SearchScreen from './screens/SearchScreen'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/search/:keyword' component={SearchScreen} />
          <Route exact path='/genre/:id' component={GenreScreen} />
        </main>
      </div>
    </Router>
  );
}

export default App;
