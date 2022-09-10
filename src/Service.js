
import { Link } from 'react-router-dom'


const Service = ({id,image,price,category,product}) => {
  return(

    <article>
      <img src={image} alt="category" />
      <div>
      <h4 className='category'>{category}</h4>
      <h4 className='price'>${price}</h4>
      <header>
        <p>{product}</p>
      </header>
      </div>
      


    </article>
  )
}

export default Service