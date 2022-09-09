const textos: TextoMock = {
    home: {
        titulo: "Pagina Incial",
        boasVindas: "Bem-vindo",
        secaoPrincipal: {
            titulo: "Testes E2E",
            descricao: "Poc para demonstrar os testes E2E usando a biblioteca Detox.",
            maisInformacoes: "Para mais informações, acesse:"
        }
    }
}

type Secao = { 
    titulo?: string,
    descricao?: string,
    maisInformacoes?: string
}

type Tela = {
    titulo?: string,
    boasVindas?: string
    secaoPrincipal?: Secao
}

export type TextoMock = {
    titulo?: string,
    boasVindas?: string,
    secaoPrincipal?: Secao,
    home?: Tela
}

export default textos;