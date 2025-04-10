import {GifItem} from "../../src/components/index.js";
import {render, screen} from "@testing-library/react";

describe('Pruebas en GifItem', () => {

    const title = "BreakingBad";
    const url = "https://www.gif.com/";
    const id = "123123;"

    test('La página hace match con el snapshot', () => {

        const { container } = render(<GifItem url={url} title={title} id={id} />);

        expect(container).toMatchSnapshot();

    });

    test("Debe mostrar la imagen con el url y alt indicado", () => {

        render(<GifItem url={url} title={title} id={id} />);
        // screen.debug();

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const {src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test(" Debe mostrar el título en el componente", () => {
        render(<GifItem url={url} title={title} id={id} />);
        expect( screen.getByText(title) ).toBeTruthy();
    })




})