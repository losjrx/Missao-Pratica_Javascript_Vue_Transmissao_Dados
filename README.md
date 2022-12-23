# Missao-Pratica_Javascript_Vue_Transmissao_Dados

Trabalho do curso de Desenvolvedor Full Stack da Estácio. O objetivo era o desenvolvimento de três páginas diferentes: **ordenando**, **receitas** e **usuarios**.

>**Aluno:** Lauis de Oliveira e Silva Junior

## ordenando.html

A página permite a adição de uma lista de números (inteiros ou reais), sendo possível ordená-los por meio de três algoritmos diferentes no arquivo *ordenando.js*: Bubble Sorte, Selection Sort e Quick Sort. O botão "Misturar" permite bagunçar a ordem para que sejam testados cada método de ordenação.

A ideia foi trabalhar com **Javascript puro**, com código dentro do html e em um arquivo separado. O estilo também foi feito com **CSS puro**.

## receitas.html

A página exibe receitas em cards estilizados com a ajuda do framework **Bootstrap**. Os dados das receitas têm como origem um vetor de elementos **JSON**, o que facilita a edição da página. Os elementos de script também foram colocados na própria página.

## usuarios.html

Aqui há a utilização do framework **Vue.js** na construção dinâmica de elementos HTML. Os dados para construção dos cards dos usuários são originados da **requisição HTTP**, em que se obtém como resposta o dado no formato JSON.