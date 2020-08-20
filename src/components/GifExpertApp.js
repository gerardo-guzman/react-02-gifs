import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One PunchMan', 'Naruto', 'Boku no Hero'];
    const [categories, setCategories] = useState(['One PunchMan']);

    const handleAdd = () => {
        setCategories([...categories, 'HxH']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map((category, index) => (
                        <GifGrid key={category} 
                        category={category} />
                    ))
                }
            </ol>
        </>
    );
}
