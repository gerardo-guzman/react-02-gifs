import React, {  } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    /* const [images, setimages] = useState([]);
    useEffect( () => {
        getGifs(category).then(gifs => 
            setimages(gifs)
        )
    }, [category]); */
    const {data, loading} = useFetchGifs(category);
    console.log(data)
    console.log(loading)

    return (
        <>
        <h3>{ category }</h3>
        {
            loading? 'cargando...'
            : <div className="card-greed">
                {
                    data?.map(image => (
                        <GifGridItem 
                            key={image.id}
                            {...image} />
                    ))
                }
            </div>
        }
        {/* <div className="card-greed">
                {
                    images.map(image => (
                        <GifGridItem 
                            key={image.id}
                            {...image} />
                    ))
                }
        </div> */}
        </>
    )
}
