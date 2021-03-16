import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import CreateExercise from "./components/create-exercise.component";
import CreateUsers from "./components/create-user.component";
import EditExcercise from "./components/edit-exercise.component"
import ExerciseList from "./components/exercises-list.component";
import Navbar from "./components/navbar.component"


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExcercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUsers} />
      </div>
    </Router>
  );
}

export default App;
