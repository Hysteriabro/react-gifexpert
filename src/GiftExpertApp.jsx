
import { useState } from 'react'
import { AddCategory, GiftGrid } from './components'
// import { AddCategory } from './components/AddCategory'
// import { GiftGrid } from './components/GiftGrid'

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ])

    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [ ...cat, newCategory ] );
    }

    return (
        <>
            {/* titulo */}
            <h1>GiftExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // onSetCategories={ setCategories } 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* Listado de Gifs */}
            { 
                categories.map( ( category ) => ( 
                    <GiftGrid 
                        key={ category } 
                        category={ category }
                    />
                ) ) 
            }
                {/* Gif Item */}
        </>
    )
}
