import {GifExpertApp} from "../src/GifExpertApp.jsx";
import {fireEvent, render, screen} from "@testing-library/react";
import {AddCategory} from "../src/components/index.js";

describe("Pruebas en GifExpertApp", () => {

    test("Debe coincidir con el snapshot", () => {

        const {container} = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();

    });

    test("Debe escribir la nueva categoría en un h3", () => {

        const inputValue = "Saitama";
        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input , { target: { value: inputValue }});
        fireEvent.submit( form );

        expect ( screen.getAllByRole('heading', {level:3} ).length ).toBe(2);

    });

    test("Si la categoría ya existe no debe volver a escribirla", () => {

        const inputValue = "Saitama";
        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input , { target: { value: inputValue }});
        fireEvent.submit( form );
        fireEvent.input( input , { target: { value: inputValue }});
        fireEvent.submit( form );

        expect( screen.getAllByText(inputValue).length ).toBe(1);

    });



})