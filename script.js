let numbersArray = [];

function insertNumbers() {
    numbersArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    document.getElementById('output').innerText = 'Números inseridos no array.';
}

function getArraySize() {
    document.getElementById('output').innerText = 'Tamanho do Array: ' + numbersArray.length;
}

function getFirstElement() {
    document.getElementById('output').innerText = '1º Elemento: ' + numbersArray[0];
}

function getLastElement() {
    document.getElementById('output').innerText = 'Último Elemento: ' + numbersArray[numbersArray.length - 1];
}

function getNumberOfElements() {
    document.getElementById('output').innerText = 'Número de Elementos: ' + numbersArray.length;
}

function updateElement() {
    const position = prompt('Digite a posição a ser alterada:');
    const newValue = prompt('Digite o novo valor:');

    if (position >= 0 && position < numbersArray.length) {
        numbersArray[position] = newValue;
        listArray();
    } else {
        alert('Posição inválida.');
    }
}

function listArray() {
    document.getElementById('output').innerText = 'Array: [' + numbersArray.join(', ') + ']';
}

function removeElements() {
    numbersArray.length = 0;
    document.getElementById('output').innerText = 'Array esvaziado.';
}

function shuffleArray() {
    numbersArray.sort(() => Math.random() - 0.5);
    listArray();
}

function listEveryTwo() {
    const everyTwoArray = numbersArray.filter((_, index) => index % 2 === 0);
    document.getElementById('output').innerText = 'Array de 2 em 2: [' + everyTwoArray.join(', ') + ']';
}

function arrayStats() {
    const sum = numbersArray.reduce((acc, num) => acc + num, 0);
    const average = sum / numbersArray.length;
    const sortedArray = [...numbersArray].sort((a, b) => a - b);
    const median = numbersArray.length % 2 === 0
        ? (sortedArray[numbersArray.length / 2 - 1] + sortedArray[numbersArray.length / 2]) / 2
        : sortedArray[Math.floor(numbersArray.length / 2)];
    const max = Math.max(...numbersArray);
    const min = Math.min(...numbersArray);

    document.getElementById('output').innerText = `
    Soma: ${sum}
    Média: ${average.toFixed(2)}
    Mediana: ${median}
    Máximo: ${max}
    Mínimo: ${min}
  `;
}

function checkDuplicatesPrompt() {
    const numberToCheck = prompt('Digite o número a ser verificado:');
    const hasDuplicates = numbersArray.includes(Number(numberToCheck), numbersArray.indexOf(Number(numberToCheck)) + 1);

    document.getElementById('output').innerText = `Há duplicados do número ${numberToCheck}? ${hasDuplicates ? 'Sim' : 'Não'}`;
}

function checkAnyDuplicates() {
    const hasDuplicates = new Set(numbersArray).size !== numbersArray.length;


    document.getElementById('output').innerText = `Há números duplicados? ${hasDuplicates ? 'Sim' : 'Não'}`;
}

function fillRandomArray() {
    numbersArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 201) - 100);
    const coloredArray = numbersArray.map(num => num >= 0 ? `<span class="positive">${num}</span>` : `<span class="negative">${num}</span>`);
    document.getElementById('output').innerHTML = 'Array: ' + coloredArray.join(', ');
}