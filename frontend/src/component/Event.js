import React from 'react'

const Event = ({dispatch,event}) => {
  const deleteButton = () => {
    const result = window.confirm(`イベント(id=${event.id})削除してもよろしいですか？`)
    if(result){
    dispatch({
        type: 'DELETE_EVENT',
        id: event.id
      })
    }
  }
  return(
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button className="btn btn-danger" onClick={deleteButton}>削除</button></td>
    </tr>
    )
  }

export default Event