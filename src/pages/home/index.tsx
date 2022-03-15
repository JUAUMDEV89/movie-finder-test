import { useState, useEffect, FormEvent } from 'react';
import { api } from '../../services/api';

import { Page, InputContent, Content } from './styles';
import { SearchMovie } from '../../components/searchMoviesList';

import { AiOutlineSearch } from 'react-icons/ai';

interface movies {
    id: number;
    title: string;
    original_title: string;
    poster_path: string;
    vote_average:  number;
    overview:  string;
}

export function Home(){

        const [movieValue, setMovieValue] = useState('');
        const [moviesResults, setMoviesResults] = useState<movies[]>([]);

        const API_KEY = process.env.REACT_APP_API_KEY_THEMOVIEDB;

        useEffect(()=>{
          async function loadMovies(){
          
           try{

            const movieValueLowerCase = movieValue.toLowerCase()

            const response = await api.get(`/search/movie?query=${movieValueLowerCase}&api_key=${API_KEY}`);
   
            const sevenFirstPositon = [];

            for(let i = 0; i <= 7; i++){
              sevenFirstPositon.push(response.data.results[i])
            }
   
            console.log(sevenFirstPositon);
            setMoviesResults(sevenFirstPositon);
           }catch(err){
             console.log(err)
           }
          }

           loadMovies()
        }, [movieValue]);

        async function handleSearchMovie(event: FormEvent){
          event.preventDefault();
        
          if(!movieValue.trim()){
            return;
          }
        
          const response = await api.get(`/search/movie?query=${movieValue}&api_key=${API_KEY}`);
 
          const sevenFirstPositon = [];
 
          for(let i = 0; i <= 7; i++){
            sevenFirstPositon.push(response.data.results[i])
          }

          setMoviesResults(sevenFirstPositon);
          
          console.log(sevenFirstPositon);
         }

         return (
           <Page>
           <Content>
            <div>
              <h3>Olá!</h3>
              <div>
                <h4>Bem-vindo ao Movie Finder</h4>
                <p>Aqui você encontra tudo sobre filmes: sinopse, capa oficial, avaliação e muito mais.</p>
              </div>
            </div>

             <form autoComplete='off' onSubmit={handleSearchMovie}>
               <strong>Busque um filme para começar.</strong>
               <InputContent>
                  <input autoComplete='off' placeholder='Pesquise pelo nome do filme...' type="text" name="movie" id="movie" value={movieValue} onChange={(e)=>setMovieValue(e.target.value)} />
                  <button type='submit'><AiOutlineSearch color='#b967c7'/></button>
               </InputContent>
               
              {
                moviesResults.map(movie=>(
                  <SearchMovie key={movie.id} id={movie.id} title={movie.title} />
                ))
              }
             </form>
            </Content>
           </Page>
         );
       }
    
