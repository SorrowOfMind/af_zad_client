import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadChannels, deleteChannel, updateChannel} from '../actions/crudActions';
import EditModal from './EditModal';
import ListRow from './ListRow';

const List = () => {
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const channelsList = useSelector(state => state.channels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChannels());
  },[dispatch, editId]);

  const handleDelete = id => {
    dispatch(deleteChannel(id));
  }

  const openModal = id => {
    setEditId(id);
    setEditModal(true);
  }

  const handleUpdate = (numInput) => {
    dispatch(updateChannel(editId, numInput));
    setEditModal(false);
  }
 
  return (
    <>
    {(editModal && editId) && <EditModal id={editId} closeModal={setEditModal} handleUpdate={handleUpdate}/>}
    <section className='section__list-channels'>
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
                      handleDelete={handleDelete}
                      openModal={openModal}/>
          })}
        </tbody>
      </table>
    </section>
    </>
  );
}

export default List;
