import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";


export const GiftGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
                // isLoading ? (<h2>Cargando...</h2>) : null

            }

            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GiftItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}

