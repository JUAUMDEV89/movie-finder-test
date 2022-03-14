import { useEffect, useState, FormEvent } from 'react';
import { api } from '../../services/api';

import { Page, InputContent } from './styles';

interface movies {
  id: number;
  title: string;
}

export function Home(){

    const [movieValue, setMovieValue] = useState('');
        const [moviesResults, setMoviesResults] = useState<movies[]>([]);
       
        const API_KEY = 'f2323eb016954b2a5370e5317c9f2398';
       
        async function handleSearchMovie(event: FormEvent){
         event.preventDefault();
       
         if(!movieValue.trim()){
           return;
         }
       
         const response = await api.get(`/search/movie?query=${movieValue}&api_key=${API_KEY}`);
       
         console.log(response.data);
         setMoviesResults(response.data.results);
        }

         return (
           <Page>

            <div>
              <h3>Olá!</h3>
              <div>
                <h4>Bem vindo ao Movie Finder</h4>
                <p>Aqui você encontra tudo sobre filmes: sinopse, capa oficial, avaliação e muito mais</p>
              </div>
            </div>

             <form onSubmit={handleSearchMovie}>
               <InputContent>
                  <input type="text" name="movie" id="movie" value={movieValue} onChange={(e)=>setMovieValue(e.target.value)} />
                  <button type='submit'>Search</button>
               </InputContent>
               {
                 moviesResults.length ===  0 ?(
                   <p>Sem Resultados</p>
                 ) : (
                   moviesResults.map(movie=>{
                     return(
                       <div key={movie.id}>{movie.title}</div>
                     )
                   })
                 )
               }
             </form>
           </Page>
         );
       }
    
