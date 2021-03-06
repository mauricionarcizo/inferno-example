
import Inferno from 'inferno';
import Component from 'inferno-component';
import ApiService from './utils/ApiService';
import './App.css';
import Loading from './components/Loading/Loading';
import DinoList from './components/DinoList/DinoList';

class App extends Component {
  componentDidMount() {
    // GET list of dinosaurs from API
    ApiService.getDinoList()
      .then(
        res => {
          // Set state with fetched dinos list
          this.setState({
            dinos: res
          });
        },
        error => {
          // An error occurred, set state with error
          this.setState({
            error: error
          });
        }
      );
  }

  render(props, state) {
    return(
      <div className="App">
        <header className="App-header bg-primary clearfix">
          <h1 className="text-center">Dinosaurs</h1>
        </header>
        <div className="App-content container-fluid">
          <div className="row">
            {
              state.dinos ? (
               <DinoList dinos={state.dinos} />
              ) : (
                <Loading error={state.error} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;