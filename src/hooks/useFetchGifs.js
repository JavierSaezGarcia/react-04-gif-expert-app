// Un hook personalidado es una funcion que retorna un objeto
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  // Nunca dentro de una funcional component debemos hacer una llamada como esta porque cada vez que ejecutemos lo ejecuta todo el tiempo y eso es muy pesado.
    // getGifs(category); 
    // Para esto esta useEffect
    const [images, setImages] = useState([]);
    // ahora hacemos el isLoading
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async () => {
        const gifs = await getGifs(category);
        setImages(gifs);
        setIsLoading(false);
    };
    
    useEffect(() => { // No podemos poner un async() en useEffect pero si dentro de la funcion
       getImages();
         
    }, [category]);

    return {
        images,
        isLoading
    }
}


