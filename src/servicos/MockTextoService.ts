import textos from "../mock/textos";

export default class MockTextoService {

    constructor() {}

    getTextos(): any {
        return textos;
    }

    getTextosPorTela(tela: string): any {
        return textos[tela];
    }
}
const linksExternos: any = {
    urlDetox: "https://wix.github.io/Detox/"
}