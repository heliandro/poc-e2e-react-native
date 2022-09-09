import { useEffect, useState } from "react";
import MockTextoService from "../servicos/MockTextoService";

export default function useTextos (mockTextoService: MockTextoService, tela?: string) {
    const [textos, setTextos] = useState({});

    useEffect(() => {
        const output = tela ? mockTextoService.getTextosPorTela(tela) : mockTextoService.getTextos();
        setTextos(output);
    }, []);

    return textos;
}