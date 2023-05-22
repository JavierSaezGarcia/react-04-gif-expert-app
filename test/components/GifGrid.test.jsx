import { render, screen } from '@testing-library/react';
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// Vamos a crear un mock completo de useFetchGifs
// Con esto le decimos , haga un mock completo de este path
// y cuando llamemos a useFetchGifs , retorne los datos que queramos
jest.mock('../../src/hooks/useFetchGifs'); 

describe('Testing <GifGrid />', () => {
    const category = 'One Punch';
    test('should display isLoading initiallly', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        
        render( <GifGrid category={category} /> );
        screen.debug();
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );   
    
    
    });

    test('Should display images when they are loaded by useFetchGifs', () => {
        // Nos inventamos un arreglo de imagenes
        const gifs = [
            {
                id: 'ABC',
                title: 'Soldiers Amulet',
                url: 'https://localhost/soldiers.jpg'            
            },
            {
                id: '123',
                title: 'Mage',
                url: 'https://localhost/mage.jpg'            
            },
        ];
        // Aqui le decimos que useFetchGifs retorne los datos que queramos
        // En este caso, que retorne un arreglo de imagenes
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        // Aqui vamos a hacer un render de GifGrid        
        render( <GifGrid category={category} /> );
        // Hacemos un debug de la pantalla
        screen.debug();
        // Aqui vamos a hacer un assertion para verificar que se muestren las DOS imagenes
        expect( screen.getAllByRole('img').length ).toBe(2);
                
    });

});