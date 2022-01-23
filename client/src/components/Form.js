import React, {useRef, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addChannel} from '../actions/crudActions';
import useInput from '../hooks/useInput';

const Form = () => {
    const [channel, setChannel] = useInput("");
    const [nClients, setNClients] = useInput("");
    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();
    const channelInput = useRef(null);

    useEffect(() => {
        channelInput.current.focus();
    }, [])
  
    const validateForm = () => {
        const errors = {};
        let isValid = true;

        if (!channel){
            errors.channel = "Proszę podać nazwę kanału."
            isValid = false;
        }

        if (!nClients){
            errors.nClients = "Proszę podać liczbę klientów."
            isValid = false;
        }

        if (nClients){
            const rgx = /[0-9]+/;
            if (!rgx.test(nClients)){
                errors.nClients = "Dozwolone tylko cyfry."
                isValid = false;
            }
        }

        setFormErrors(errors);
        return isValid;
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (validateForm()){
            let data = {name: channel, num_clients: parseInt(nClients)};
            try {
                dispatch(addChannel(data));
                setChannel.clearInput();
                setNClients.clearInput();
            } catch (err){
                console.log(err.message);
            }
        }
    }

    return (
        <section className="form__wrapper text-center container">
            <h2 className="mb-4">Dodaj nowy kanał:</h2>
            <form className='form container p-0' onSubmit={handleSubmit}>
                <div className="row container g-3 form__inner-wrapper">
                    <div className="form__input-wrapper col-auto">
                        <label htmlFor="input-channel" className="form-label">Kanał: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="input-channel"
                            name="channel" 
                            ref={channelInput}
                            {...setChannel.setInput}
                        />
                        {formErrors.channel ? <p className="form__error text-danger">{formErrors.channel}</p> : null}
                    </div>
                    <div className="form__input-wrapper col-auto">
                        <label htmlFor="input-users" className="form-label">Liczba klientów: </label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="input-channel"
                            name="nclients"
                            {...setNClients.setInput}
                        />
                        {formErrors.nClients ? <p className="form__error text-danger">{formErrors.nClients}</p> : null}
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-info">DODAJ +</button>
                    </div>
                </div>
            </form>
        </section>
    );
  
}

export default Form;
