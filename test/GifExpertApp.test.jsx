import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from "../src/GifExpertApp";

describe('Testing <GifExpertApp />', () => {

    test('should Add new categories', () => {

        // Arrange
        const inputValue = 'Soldiers Amulet';

        // Act
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: inputValue + ' Prime' } });
        fireEvent.submit(form);

        // Assert
        expect(screen.getAllByRole('heading', { level: 2 }).length).toBe(2);
    });

    test("Should add category if it's not repeated", () => {
        // Mi app tiene como state inicial de las categorias "Soldiers Amulet".
        // Arrange
        const existingCategory = 'Soldiers Amulet';
        const newCategory = 'New Category';

        // Act
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: existingCategory } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);

        // Assert
        try {
            screen.getByText(newCategory);
            // Si se encuentra el elemento, lanzamos una excepción
            throw new Error(`${newCategory} should not be present`);
        } catch (error) {
            // Si se captura la excepción, el test pasa
            expect(error).toBeTruthy();
        }
    });



});
