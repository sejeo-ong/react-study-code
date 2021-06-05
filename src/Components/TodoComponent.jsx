import MainLayout from '../Layout/MainLayout';
import Todo from '../Presenters/Todo';

import {useEffect, useState} from 'react';

const TodoComponent = () => {
    const [lists, setLists] = useState([]);

    const addList = (item) => {
        setLists(lists.concat(item));
    }

    //localStorage 저장하기 (JSON 문자열)
    const saveList = () => {
        localStorage.setItem('todo', JSON.stringify(lists));
    }

    //localStorage 불러오기 (JSON화)
    const getList = () => {
        setLists(JSON.parse(localStorage.getItem('todo')));
    }

    const removeListItem = (deleteIndex) => {
        console.log(deleteIndex);
        //deleteIndex = string(=>int)
        //index = int
        setLists(lists.filter((list,index)=>index!==deleteIndex));
    }

    useEffect(()=> {
        getList();
    }, []);


    useEffect(()=>{
        saveList();
    },[lists]);

    return (
        <MainLayout>
           <Todo lists={lists} addList={addList} removeListItem={removeListItem}></Todo>
        </MainLayout>
    );
}

export default TodoComponent;