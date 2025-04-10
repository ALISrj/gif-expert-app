import {GifGrid} from "../../src/components/index.js";
import {render, screen} from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs.js";

jest.mock("../../src/hooks/useFetchGifs.js");


describe('Pruebs en GifGrid', () => {

    const category = "Breaking Bad";

    test("Debe mostrar el loading inicialmente", () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render( <GifGrid category={category} /> )
        expect( screen.getByText("Cargando...") );
        expect( screen.getByText( category ))


    });

    test("Debe de mostrar items cuándo se cargan las imágenes useFectGifs", ( ) => {

        const gifs = [
            {
                id: "ABC",
                title: "Breaking Bad",
                url: "https://www.bad.com/",
            },
            {
                id: "123",
                title: "Goku",
                url: "https://www.goku.com/",
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        })

        render( <GifGrid category={category} /> );

        expect( screen.getAllByRole('img').length ).toBe(2);

    });

});