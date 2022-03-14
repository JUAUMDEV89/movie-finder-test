import { Route, BrowserRouter, Routes as RoutesProvider } from 'react-router-dom';

import { Home } from './pages/home';
import { MovieInfo } from './pages/movieInfo';

function Routes() {
  return(
    
     <BrowserRouter>
           <RoutesProvider>
             <Route  element={ <Home /> } path="/" />
             <Route element={ <MovieInfo /> } path="/movie/:id" />
           </RoutesProvider>
     </BrowserRouter>
    
  )
}

 

export default Routes;
