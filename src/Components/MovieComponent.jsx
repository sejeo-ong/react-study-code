import MainLayout from '../Layout/MainLayout';
import Movie from '../Presenters/Movie';


import {useEffect} from 'react';

const MovieComponent = () => {

    useEffect(() => {
        console.log('mount');
        return () => {
            console.log('unmount');
        }
    }, []);

    return (
        <MainLayout>
           <Movie></Movie>
        </MainLayout>
    );
}

export default MovieComponent;