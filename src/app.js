import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "./components/main-page";
import ReactBootstrapDaterangepickerPage from "./components/react-bootstrap-daterangepicker-page";
import ReactDatepickerPage from "./components/react-datepicker-page";
import ROUTES from "./routes";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={ROUTES.REACT_BOOTSTRAP_DATERANGEPICKER} exact component={ReactBootstrapDaterangepickerPage} />
        <Route path={ROUTES.REACT_DATEPICKER} exact component={ReactDatepickerPage} />
        <Route path={ROUTES.INDEX} exact component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
