import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        console.log(newCategory);

        if (categories.includes(newCategory)) return;

        // 1.- forma de hacerlo
        // Y olvidandonos del mitico push, aqui lo que hacemos es usar el metodo set que hemos llamado setCategories 
        // y le pasamos como primer parametro la nueva categoria y el segundo hacemos desestructuracion de array de la que tenemos
        // esto lo que hara es ponernos al inicio la nueva categoria y despues concatenarlo con el resto de las categoria

        setCategories([newCategory, ...categories]); // nueva categoria mas el spread de las categorias existentes y la coloca al principio
        // setCategories([...categories, newCategory]); // lo mismo al final

        // 2.- forma de hacerlo
        // setCategories( cat => [...cat, newCategory]); // otra forma de hacerlo y lo coloca al final
    }

    return (
        <>
            <div className="container">
                <h1>GifExpertApp</h1>
                <AddCategory
                    onNewCategory={valor => onAddCategory(valor)}
                    currentCategories={categories}
                />
                {
                    categories.map(category => {
                        return (
                            <GifGrid
                                key={category}
                                category={category}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
