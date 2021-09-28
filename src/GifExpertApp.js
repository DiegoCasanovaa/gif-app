import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

   const [categories, setCategories] = useState(['One punch'])
    
    // const handleAdd = () =>{

    //     const add = ['Kimetsu no yaiba','Hunter X Hunter']

    //     // setCategories([...categories, add])

    //     setCategories( cats => {
    //         return cats.concat(add);
    //     })
    // }
    
    return (
        <>
         <h2> GifExpertApp </h2>
         <AddCategory setCategories={ setCategories } />
         <hr />

         <ol>
             { categories.map( category =>
                
                <GifGrid 
                    key={ category }
                    category={ category }
                />
             )
             }
         </ol>
        </>
    )
}
