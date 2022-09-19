import React from 'react';
import './Form.css';

const Form = ({contFormSearch}) => {
    return (
        <>
            <form className="d-flex">
                    <input className="form-control me-sm-2" type="text" placeholder={contFormSearch}/>
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">{contFormSearch}</button>
            </form>
        </>
    );
}

export default Form;
