import "./App.css";
import Footer from "./component/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import About from "./component/About/About";
import Services from "./component/Services/Services";
import Contact from "./component/Contact/Contact";
import Booking from "./component/Booking/Booking";
import Notfound from "./component/Notfound/Notfound";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/booking" component={Booking} />
        <Route component={Notfound} />
      </Switch>
      {/* <Navbar /> */}
      <Footer />
    </div>
  );
}

export default App;
