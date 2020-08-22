import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One PunchMan', 'Naruto', 'Boku no Hero'];
    const [categories, setCategories] = useState(['Boku no hero']);

    return (
        <>
            <h2>Busca un Gif! :D</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
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
