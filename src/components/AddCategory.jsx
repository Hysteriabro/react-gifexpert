import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;

        // onSetCategories( categories => [ inputValue, ...categories ]);
        onNewCategory(newInputValue);
        setinputValue('');
    } 

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
