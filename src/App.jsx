import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import Settings from './pages/Settings';
import Questions from "./pages/Questions";
import Score from "./pages/Score";

function App() {


  return (
<>
<Router>


<Routes>
<Route element={<Settings/>}  path='/' exact  />
<Route element={<Questions/>}  path='/questions' />
<Route element={<Score/>}  path='/score' />
</Routes>




</Router>



 
</>
  
  );
}



export default App
