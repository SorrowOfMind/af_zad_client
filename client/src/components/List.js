import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadChannels, deleteChannel} from '../actions/crudActions';
import ListRow from './ListRow';

const List = () => {
  const channelsList = useSelector(state => state.channels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChannels());
  },[]);

  const handleDelete = id => {
    dispatch(deleteChannel(id));
  }

  return (
    <section className='container section__list-channels'>
      <h2>Lista wszystkich kanałów:</h2>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">nazwa kanału</th>
            <th scope="col">liczba klientów</th>
            <th scope="col" className="text-center">akcje</th>
          </tr>
        </thead>
        <tbody>
          {channelsList && channelsList.map((channel, idx) => {
            return  <ListRow 
                      key={channel.id} 
                      idx={idx} 
                      channel={channel}
                      handleDelete={handleDelete}/>
          })}
        </tbody>
      </table>
    </section>
  );
}

export default List;
