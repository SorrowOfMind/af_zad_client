import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import useInput from '../hooks/useInput';
import {motion} from 'framer-motion';

const backdropVariant = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
}

const modalVariant = {
    hidden: {
        x: '-100vw',
        y: '-50%',
        opacity: 0
    },
    visible: {
        x: '-50%',
        y: '-50%',
        opacity: 1,
        transition: {delay: 0.1},
    }
}

const EditModal = ({id, closeModal, handleUpdate}) => {
    const channels = useSelector(state => state.channels);
    const channel = channels.filter(chan => chan.id == id);
    const [numInput, setNumInput] = useInput(channel[0].num_clients);
    const [formErrors, setFormErrors] = useState("");

    const closeByBackdrop = e => {
        e.stopPropagation();
        if (e.target.id !== '') closeModal(false);
    }

    const closeByX = e => {
        e.stopPropagation();
        closeModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!numInput || !/[0-9]+/.test(numInput))
            setFormErrors("Proszę podać liczbę klientów")
        else
            handleUpdate(numInput);
    }

    return (
        <>
        {channel &&
            <motion.div 
                className="backdrop"
                variant={backdropVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={closeByBackdrop}
                id="backdrop"
            >
                <motion.div 
                    className="modal"
                    variants={modalVariant}
                >
                    <h2 className="modal-title">Edytuj liczbę klientów ({channel[0].name}):</h2>
                    <span className="modal-close" onClick={closeByX}>x</span>
                    <form className='form container p-0' onSubmit={handleSubmit}>
                        <div className="row row-cols-lg-auto g-3 align-items-end form__inner-wrapper form__inner-wrapper-modal">
                            <div className="form__input-wrapper w-100">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    name="nclients"
                                    {...setNumInput}
                                />
                                {formErrors ? <p className="form__error text-danger">{formErrors}</p> : null}
                            </div>
                            <button type="submit" className="btn btn-info w-100 mt-4">EDYTUJ</button>
                        </div>
                </form>
                </motion.div>
            </motion.div>}
        </>
    )
}

export default EditModal;
