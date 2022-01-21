import TopBar from './components/TopBar';
import Form from './components/Form';
import List from './components/List';
import Chart from './components/Chart';

function App() {
  return (
    <div className="app">
      <TopBar/>
      <Form />
      <div className="app__content-wrapper container">
        <List />
        <Chart />
      </div>
    </div>
  );
}

export default App;
