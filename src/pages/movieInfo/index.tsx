import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft }  from 'react-icons/ai';
import { useParams, Link } from 'react-router-dom';

import { api } from '../../services/api';

import {  Page, Content  } from  './styles';
import { GiRoundStar } from "react-icons/gi";

interface MovieIfosProps{
    id: number;
    title: string;
    original_title: string;
    poster_path: string;
    vote_average:  number;
    overview:  string;
}


export function MovieInfo(){

    const API_KEY = process.env.REACT_APP_API_KEY_THEMOVIEDB;

    const [movie, setMovie] = useState<MovieIfosProps>();

    const { id } = useParams();

     useEffect(()=>{
        async function loadMovieInfo(){

            const response = await api.get(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`);

            const data = response.data;

            setMovie(data);
            console.log(data);
        }

        loadMovieInfo();
     }, []);

     return(
            <Page>
                <section>
                    <Link to='/'> 
                        <AiOutlineArrowLeft />
                        <span>Voltar</span>
                    </Link>
                    <Content>
                        <h3>{movie?.title}</h3>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`} alt={movie?.original_title} />

                            <div>
                              <div>
                                  <strong>Titulo Original:</strong>
                                  <p>{movie?.original_title}</p>
                              </div>

                              <div>
                                  <strong>Sínopse:</strong>
                                  <p>{movie?.overview}</p>
                              </div>


                              <div className="vote">
                                  <strong>Avaliação:</strong>
                                  <p><GiRoundStar style={{marginRight: '0.4rem'}} fontSize={"1.4rem"} color="#ebbd34" />{movie?.vote_average}<span>/10</span></p>
                              </div>
                            </div>
                        </div>
                    </Content>
                </section>
            </Page>
     )
}