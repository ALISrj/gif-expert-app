import {useState} from "react";
import PropTypes from "prop-types";


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        // console.log(event)
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 2) return;

        // console.log(inputValue);

        onNewCategory( inputValue.trim() );
        setInputValue('');

    }

    return (

        <form onSubmit={onSubmit} aria-label={"form"}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange} // El evento pasa por dentro
            />
        </form>
    )
}

AddCategory.propTypes = {

    onNewCategory: PropTypes.func.isRequired

}