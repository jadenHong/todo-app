import React from 'react';
import Loading from './Loading';
const List = ({ listValue }) => {


    const renderList = () => {
        return (
            <ul>
                {listValue.map((listItem, i) => <li key={i}>{listItem}</li>)}
            </ul>)
    }
    return (
        <div className="todo-list">

            {/* 이부분에 지금 todoList.length === 0이어도 무조건 렌더링 하는건데 */}
            {/* 만약에 todoList 가 비어있으면 "데이터 없음" 이런걸 렌더링 하고싶잖아요 솔직히? */}
            {listValue.length === 0 ? <Loading loadingObj={'list'} /> : renderList()}

        </div>
    )
}
export default List;
