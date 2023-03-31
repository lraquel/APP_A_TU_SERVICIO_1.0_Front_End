import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const Feeds = () => {
    const [feeds, setFeeds] = useState([])
    const [search, setSearch] = useState('')

    const URL = 'https://jsonplaceholder.typicode.com/posts'
    const getFeed = () => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setFeeds(data))
            .catch(err => console.error(err));
        }
        
        
        useEffect(() => {
            getFeed();
            
        }, [])
        /*
          const searcher = (e) => {
      e.preventDefault();
      setSearch(e.target.value)   
  }


   
   const results = !search ? users : users.filter((dato) => dato.title.toLowerCase().includes(search.toLocaleLowerCase())) 
   */
     
        return(
            <div className=''>
                {
                    feeds &&
                    feeds.map(({...f}) =><Feed key={f.id} {...f}/>)
                }
            </div>
        )
    }

export default Feeds;



export const Feed = (props) =>{
    console.log(props)
    return(
        
            <Link to={"/"+props.id} className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Titulo{props.title}</h5>
                        <p className="card-text">Descripcion{props.body}</p>
                        <p className="card-text">description 2{props.height}</p>
                        
                        <button className="btn btn-primary"> click</button>
                    
                    </div>
                    </div>
                </div>
            </Link>
    
    )
}

