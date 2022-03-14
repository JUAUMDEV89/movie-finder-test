import { Container } from './styles';

interface moviesListProps{
    id: number;
    title: string;
}

export function SearchMovie({ id, title }: moviesListProps){
    return(
       <Container>
            <a href={`/movie/${id}` }>{title}</a>  
       </Container>    
    )
}