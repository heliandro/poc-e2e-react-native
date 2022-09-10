const textos: TextoMock = {
    home: {
        titulo: "Pagina Incial",
        boasVindas: "Bem-vindo",
        secaoPrincipal: {
            titulo: "Testes E2E",
            descricao: "Poc para demonstrar os testes E2E usando a biblioteca Detox.",
            maisInformacoes: "Para mais informações, acesse:"
        },
        navegacao: {
            botaoSobre: {
                texto: "Ir para a pagina Sobre",
                acao: "Sobre"
            }
        }
    },
    sobre: {
        titulo: "Pagina Sobre",
        secaoPrincipal: {
            titulo: "Sobre",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin tellus risus, et lacinia sem dignissim vel. In suscipit ullamcorper nisl nec feugiat. Fusce aliquam, tellus in malesuada pulvinar, leo tellus mattis leo, nec varius nibh ante id ante. Vestibulum tincidunt ornare tellus ut interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tempor varius massa in aliquam. Phasellus tortor eros, semper eget tellus nec, tincidunt molestie nisl. Sed rutrum mauris ac libero commodo, sit amet pulvinar justo viverra. Praesent a tellus vitae dolor accumsan elementum vitae feugiat ligula. Proin condimentum erat eget efficitur viverra. Pellentesque rhoncus vitae tortor non posuere.",
        },
        navegacao: {
            botaoVoltar: {
                texto: "Voltar",
                acao: "Home"
            }
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
    secaoPrincipal?: Secao,
    navegacao?: any
}

export type TextoMock = {
    titulo?: string,
    boasVindas?: string,
    secaoPrincipal?: Secao,
    navegacao?: any,
    home?: Tela,
    sobre?: Tela
}

export default textos;