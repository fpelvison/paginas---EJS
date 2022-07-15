const articles = [
    {
        id: 1,
        title: 'Óculos da Ray-Ban recebe e manda mensagem de Whatsapp',
        description: 'Desde 2021, a Ray-Ban colabora em uma parceria com a Meta para a criação de um modelo de óculos inteligente, ou smartglass .A Meta tem como um de seus maiores objetivos por agora e em um futuro próximo, se tornar referência no metaverso e em realidade aumentada.'
    },
    {
        id: 2,
        title: 'Entenda como as startups espaciais estão crescendo',
        description: 'Se toda startup é como um foguete que só quer subir, então nada mais natural do que o espaço ser um grande mercado para as empresas da nova economia. Isso explica o investimento em startups espaciais ter crescido tanto em 2021, em parte devido à agressividade dos americanos nos investimentos e aos juros baixos do ano. '
    }
];

function getArticles() {
    return articles;
}

function getArticleById(articleId) {
    return articles.find(article => {
        return article.id === Number(articleId)
    });
}

export { getArticles, getArticleById }