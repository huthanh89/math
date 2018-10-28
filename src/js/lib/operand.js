var Type = {
    'add': {
        operator: '+',
        calculate: (first, second) => first + second
    },
    'subtract': {
        operator: '-',
        calculate: (first, second) => first - second
    },
    'multiply': {
        operator: 'x',
        calculate: (first, second) => first* second
    },
    'divide': {
        operator: '/',
        calculate: (first, second) => first / second
    }
};

export default Type;