import { Link } from 'react-router-dom';
import { Container } from './styles';

interface moviesListProps{
    id: number;
    title: string;
}

export function SearchMovie({ id, title }: moviesListProps){
    return(
       <Container>
            <Link to={`/movie/${id}` }>{title}</Link>  
       </Container>    
    )
}