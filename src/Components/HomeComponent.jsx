import MainLayout from '../Layout/MainLayout';
import Home from '../Presenters/Home';

const HomeComponent = () => {
    const likes = [
        {
            title: '게임',
            content: '롤 너무 재밌어요',
        },
        {
            title: '떡볶이',
            content: '엽떡 로제 떡볶이 JMT',
        },
        {
            title: '놀러가기',
            content: '놀이공원 가고싶다',
        },
        {
            title: '영화보기',
            content: '영화 추천받아요',
        },
        {
            title: '씨리얼먹기',
            content: '우유를 일주일 동안 사는걸 깜빡해서 못먹고있다',
        }
    ];

    return (
        <MainLayout>
            <Home likes={likes}></Home>
        </MainLayout>
    );
}

export default HomeComponent;