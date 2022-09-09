import { useEffect, useState } from "react";
import MockTextoService from "../servicos/MockTextoService";

export default function useTextos (mockTextoService: MockTextoService, tela?: string) {
    const [textos, setTextos] = useState({});

    useEffect(() => {
        const output = tela ? mockTextoService.getTextosPorTela(tela) : mockTextoService.getTextos();
        console.log(output);
        setTextos(output);
    }, []);

    return textos;
}