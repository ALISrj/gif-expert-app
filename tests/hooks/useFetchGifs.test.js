import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";
import {renderHook, waitFor} from "@testing-library/react";

describe("Pruebs en useFetchGifs", () => {

    const category = "Breaking Bad"

    test("Debe de regresar el estado inicial", () => {

        const { result } = renderHook( () => useFetchGifs(category) );

        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test("Debe de retonar un arreglo de imágenes y el isLoading en true", async() => {

        const { result } = renderHook( () => useFetchGifs(category) );

        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0),
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });


})