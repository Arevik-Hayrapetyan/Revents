import { Fragment } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import EventDashboard from "./features/event/EventDashboard/EventDashboard";
import NavBar from "./features/nav/NavBar/NavBar";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </Fragment>
  );
}

export default App;
