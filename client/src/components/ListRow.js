import React from 'react';

const ListRow = ({idx, channel, handleDelete, openModal}) => {
    return (
        <tr key={channel.id}>
            <th scope="row">{idx + 1}</th>
            <td>{channel.name}</td>
            <td>{channel.num_clients}</td>
            <td className="list__listrow-actions">
                <button type="button" className="btn btn-info" onClick={() => openModal(channel.id)} >Edytuj</button>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(channel.id)}>Usuń</button>
            </td>
        </tr>
    );
}

export default ListRow;
