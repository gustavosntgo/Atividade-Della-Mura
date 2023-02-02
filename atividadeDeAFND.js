const fs = require('fs');

// Lê a entrada do arquivo e retorna um objeto com as informações do autômato
const readAutomaton = input => {
  const lines = input.trim().split('\n');
  const initialState = parseInt(lines[0].trim());
  const finalStates = lines[1].trim().split(',').map(state => parseInt(state));
  const transitions = lines
    .slice(2)
    .map(line => line.trim().split('|'))
    .map(transition => ({
      from: parseInt(transition[0].slice(1)),
      symbol: transition[1],
      to: parseInt(transition[2].slice(0, -1))
    }));

  return { initialState, finalStates, transitions };
};

// Verifica se a palavra é aceita pelo autômato
const processWord = (automaton, word) => {
  let state = automaton.initialState;
  for (const symbol of word) {
    const nextState = automaton.transitions.find(
      transition => transition.from === state && transition.symbol === symbol
    );
    if (!nextState) return 0;
    state = nextState.to;
  }
  return automaton.finalStates.includes(state) ? 1 : 0;
};

// Lê as entradas de um arquivo e retorna um array de resultados
const readInput = input => {
  const lines = input.trim().split('\n');
  const automaton = readAutomaton(lines[0]);
  return lines
    .slice(1)
    .map(word => processWord(automaton, word))
    .join('\n');
};

// Lê o arquivo de entrada
fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  const output = readInput(data);
  fs.writeFile('output.txt', output, err => {
    if (err) throw err;
    console.log('Arquivo de saída gerado com sucesso!');
  });
});