import textos from "../mock/textos";
import { TextoMock } from '../mock/textos';

export default class MockTextoService {

    constructor() {}

    getTextos(): TextoMock {
        return textos;
    }

    getTextosPorTela(tela: string): TextoMock {
        return textos[tela];
    }
}
const linksExternos: any = {
    urlDetox: "https://wix.github.io/Detox/"
}