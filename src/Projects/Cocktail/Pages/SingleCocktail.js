import React from 'react';
import axios from 'axios';
import Loading from '../Components/Loading';
import { useParams,Link } from 'react-router-dom';
const url ='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  
  const {id} = useParams();
  const [loading,setLoading] = React.useState(false);
  const [cocktail,setCocktail] = React.useState(null);

  async function getCocktail(){

    try{
      const response = await axios(`${url}${id}`);
      const { drinks } = response.data;
      if(drinks){
        const {strDrink:name, strDrinkThumb:image,strAlcoholic:info, strCategory:category,strGlass:glass, strInstructions:instructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = drinks[0];
        const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5];

        const newCocktail = {
          name,image,info,category,glass,instructions,ingredients
        }

        setCocktail(newCocktail)
       
          
      }else{
        setCocktail(null);
      }
      setLoading(false)

    }catch(error){
      console.log(error)
      setLoading(false)
    }
  }

  React.useEffect(() => {
    setLoading(true);
    getCocktail();
   
  },[id])

  if(loading){
    return <Loading />
  }
  if(!cocktail){
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  const {name,image,category,info,instructions,ingredients} = cocktail
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>back home</Link>
      <h2 className='section-title'>{name}</h2>

      <div className='drink'>
        <img src={image} alt={name}/>
          <div className='drink-info'>
            <p><span className='drink-data'>name : {name}</span></p>

          </div>
      </div>
    </section>
  )
}

export default SingleCocktail;