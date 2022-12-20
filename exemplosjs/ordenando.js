let swap = (arr, pos1, pos2) => {
    // Salvando valor da posição 1
    let a = arr[pos1];
    // Trocando valores das posições
    [arr[pos1], arr[pos2]] = [arr[pos2], a];
    return arr;
};
let shuffle = (arr) => {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
};
let bubble_sort = (arr) => {
    let i, j;
    for (i = arr.length - 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};
let selection_sort = (arr) => {
    let menor, indmenor, i, j;
    let n = arr.length;
    for (i = 0; i < n - 1; i++) {
        menor = arr[i];
        indmenor = i;
        for (j = i; j < n; j++) {
            if (arr[j] < menor) {
                menor = arr[j];
                indmenor = j;
            }
        }
        swap(arr, i, indmenor);
    }
    return arr;
};
function particionamento(arr, esquerda, direita) {
    var pivot = arr[Math.floor((direita + esquerda) / 2)], //middle element
    i = esquerda, //ponteiro da esquerda
    j = direita; //ponteiro da direita
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j); //trocando os elementos
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(arr, esquerda, direita) {
    var index;
    if (arr.length > 1) {
        index = particionamento(arr, esquerda, direita); //indice retornado pelo particionamento
        if (esquerda < index - 1) { //mais elementos do lado esquerdo do pivo
            quickSort(arr, esquerda, index - 1);
        }
        if (index < direita) { //mais elementos do lado direito do pivo
            quickSort(arr, index, direita);
        }
    }
    return arr;
}
//# sourceMappingURL=ordenando.js.map