import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SceneManager from 'components/SceneManager';

const Hello = () => {
  return (
    <div>
      <SceneManager/>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
