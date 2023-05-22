import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Testing in <GifItem />', () => {

  const title = 'soldiers amulet';
  const url = 'https://media4.giphy.com/media/Y1qPAAj8s5HuWqvPnw/giphy-downsized-medium.gif?cid=2cc56eb3fuelhqdvb1doohv4gmfb3mt38djcot1lkgq9gugd&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g';
  
  
  test('should match with the snapshot', () => {
    
    const { container } = render( <GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();

  });
  test('should show the image with the url and alt', () => {

    render( <GifItem title={title} url={url} />);  
    // screen.debug(); // Imprime información del DOM renderizado en la consola
    // TODO Manera menos bonita y eficiente:
    // expect(screen.getByRole('img').src)
    //       .toBe(url);
    // expect(screen.getByRole('img').alt)
    //       .toBe(title);

    // TODO Manera bonita y eficiente:
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);

    // console.log('url imagen: ',screen.getByRole('img').src);
    // console.log('texto imagen: ',screen.getByRole('img').alt);
  });

  test('should display the title in the component', () => {

    render( <GifItem title={title} url={url} />);
    expect(screen.getByText(title.toUpperCase().trim())).toBeTruthy();
    
  });
  
});




/*  Tarea:
1. Añadir proptypes a GifItem ??? yarn add Pro

  a. title obligatorio
  b. url obligatorio
2. Hacer y Evaluar el snapshot

*/