import MainLayout from '../Layout/MainLayout';
import Movie from '../Presenters/Movie';

import axios from 'axios';

import {useState, useEffect} from 'react';

const MovieComponent = () => {

    const CLIENT_ID = 'Wsi3yC_oCzFGr0CemCW5';
    const SECRET_KEY = 'PiCtTMNmN0';
    // state [변수 , 변수를 변경하는 함수] = useState(초기값)
    var [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('어벤져스'); //검색한 단어 -> 네이버에 요청

    const getMovie = () => {
        // naver 영화 api 호출
        axios.get('/v1/search/movie.json',  {
            params: {
                query: search,
            }, 
            headers: {
               'X-Naver-Client-Id': CLIENT_ID,
               'X-Naver-Client-Secret': SECRET_KEY, 
            }
        }).then((response) => {
            // movies = response.data.items;
            setMovies(response.data.items);
            console.log(response.data.items);
        }).catch((error) => {
            console.log(error);
        });
    }

    //componentDidMount
    useEffect( ()=> {
        getMovie();
    }, []);

    const changeSearch = (value) => {
        console.log('changeSearch', value);
        setSearch(value);
    }

    useEffect( () => {
        getMovie();
    }, [search]);

    return (
        <MainLayout>
           <Movie movies={movies} changeSearch={changeSearch}></Movie>
        </MainLayout>
    );
}

export default MovieComponent;