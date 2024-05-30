const locators = {
    LOGIN : {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        HOME:'[data-test=menu-home]',
        SETTINGS:'[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao] > .fas'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        XP_BTN_ALTERAR: ":nth-child(7) > :nth-child(2) > :nth-child(1) > .far"
    },
    MOVIMENTACAO: {
        DESCRICAO:'[data-test=descricao]',
        VALOR:'[data-test=valor]',
        INTERESSADO:'[data-test=envolvido]',
        STATUS: '[data-test=status]',
        BTN_SALVAR:'.btn-primary'
    },
    EXTRATO: {
        LINHAS: '#root > div > div > div:nth-child(2) > div.list-group > li'
    },
    MESSAGE: '.toast'
}

export default locators;
