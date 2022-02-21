import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

//const categories = ['One Punch', 'Samurai x', 'Dragon Ball']
const [categories, setCategories] = useState(['Samurai x']);

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />


        <ol>
      {
        categories.map( category => (
          <GifGrid 
          Key={ category }
          category={ category }
          />
        ))
          //<li key={ category }> { category } </li>) 
        }

    </ol>
    </>
  )
}

