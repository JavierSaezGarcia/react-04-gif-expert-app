import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Testing in <AddCategory />', () => {
    test('should change the value of the input', () => {
        // Se crea el sujeto de pruebas
        render(<AddCategory onNewCategory={() => { }} />);
        // screen.debug();
        // Extraemos el input
        const input = screen.getByRole('textbox');
        // Disparamos el evento de cambio
        fireEvent.input(input, { target: { value: 'Soldiers Amulet' } });
        // Evaluamos lo que suceda
        expect(input.value).toBe('Soldiers Amulet');
        expect(screen.getByDisplayValue('Soldiers Amulet')).toBeTruthy();
    });

    test('should call onNewCategory if the input has a value', () => {
        // Se crea el sujeto de pruebas
        const inputValue = 'Soldiers Amulet';
        // Se crea la función de callback con jest.fn() 
        const onNewCategory = jest.fn();
        // Se renderiza el componente
        render(<AddCategory onNewCategory={onNewCategory} />);
        // Extraemos el input
        const input = screen.getByRole('textbox');
        // Extraemos el formuario por su aria-label si no no sabe que es un formulario
        const form = screen.getByRole('form');
        // Disparamos el evento de cambio
        fireEvent.input(input, { target: { value: inputValue } });
        // Disparamos el evento de submit
        fireEvent.submit(form);
        // Evaluamos lo que suceda
        expect(input.value).toBe('');
        // Verificamos que se haya llamado la función .toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalled();
        // Verificamos que se haya llamado la función x veces con .toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // Verificamos que se haya llamado la función con el valor correcto 
        // 'Soldiers Amulet' con .toHaveBeenCalledWith(inputValue);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

            
    });
    test('should not call onNewCategory if the input is empty', () => {
        // Se crea el sujeto de pruebas
        const onNewCategory = jest.fn();
        // Se renderiza el componente
        render(<AddCategory onNewCategory={onNewCategory} />);
        // Extraemos el input
        const form = screen.getByRole('form');
        // Disparamos el evento de submit
        fireEvent.submit(form);
        // Evaluamos lo que suceda
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});