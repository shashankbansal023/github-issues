import './App.css';
import GithubIssues from './components/GithubIssues';
import IssuesHeader from './components/IssuesHeader';
import PrimaryHeader from './components/PrimaryHeader';

function App() {
  return (
    <div className="App">
      <PrimaryHeader/>
      <IssuesHeader/>
      <GithubIssues />
    </div>
  );
}

export default App;
