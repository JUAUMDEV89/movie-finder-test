import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from './pages/home';
import { MovieInfo } from './pages/movieInfo';

function Routes() {
  return(
    
     <BrowserRouter>
           <Route  component={ Home } path="/"  exact  />
           <Route component={ MovieInfo }  path="/movie/:id" />
       </BrowserRouter>
    
  )
}

 

export default Routes;
