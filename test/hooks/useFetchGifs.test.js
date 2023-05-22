import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Testing useFetchGifs hook', () => {
  test('should return the initial state', () => {
    // renderHook es una funcion que permite testear hooks y devuelve un result
    const { result } = renderHook(() => useFetchGifs(['One Punch']));
    const { images, isLoading } = result.current;
    // Esperamos que no haya imagen y isLoading esté en true
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an array of images and isLoading as false', async () => {
    const { result } = renderHook(() => useFetchGifs(['One Punch']));

    // Esperamos que se ejecute hasta que se termine la petición
    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));

    const { images, isLoading } = result.current;
    // Y cuando se termine hacemos los expects
    // Esto es redundante porque en el await ya esperamos que se ejecute hasta que se termine la petición
    // y omito volver a comprobar que la lonitud del array de imagenes sea mayor a 0 ya que ya lo hemos comprobado en el await
    
    expect(isLoading).toBeFalsy();
    
  });

});
