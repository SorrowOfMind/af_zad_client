import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadChannels} from '../actions/crudActions';

const List = () => {
  const channelsList = useSelector(state => state.channels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChannels());
  },[channelsList]);

  return (
    <div>
      <p>some text</p>
    </div>
  );
}

export default List;
