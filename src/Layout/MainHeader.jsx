import style from '../resource/css/header.module.css';
import {Link} from 'react-router-dom';

const MainHeader = () => {
    return(
        <div className={style.header}>
            <Link to='/'>
                <div>
                    홈 
                </div>
            </Link>
            <Link to='/movie'>
                <div>
                    영화
                </div>
            </Link>
           <Link to='/todo'>
                <div>
                    Todo
                </div>
           </Link>
        </div>
    );
}

export default MainHeader;