function tokenizer(input: string) {
    let tokens = [];
    let current = 0

    const alphabet = /[a-z]/;
    const numbers = /[0-9]/;
    const whiteSpace = /\s/;


    while (current < input.length) {
        let char = input[current];
        if (char.match(whiteSpace)) { current++; continue };

        if (char === "(") {
            tokens.push({
                type: "left_paren",
                value: "("
            });
            current++;
            continue;
        }

        if (char == ")") {
            tokens.push({
                type: "right_paren",
                value: ")"
            });
            current++;
            continue;
        }

        if (char.match(numbers)) {
            let value = ""
            while (char.match(numbers)) {
                value += char;
                current++;
                char = input[current];
            }
            tokens.push({
                type: "number",
                value: value
            });
        }

        if (char.match(alphabet)) {
            let value = ""
            while (char.match(alphabet)) {
                value += char;
                current++;
                char = input[current];
            }
            tokens.push({
                type: "name",
                value: value
            });
            continue;
        }
    }
    return tokens
}


function parser(tokens: any) {
    return tokens;
}
function transformer(ast: any) {
    return ast;
}
function codeGenerator(newAst: any) {
    return newAst
}

function compile(input: string) {
    const tokens = tokenizer(input);
    const ast = parser(tokens);
    const newAst = transformer(ast);
    const output = codeGenerator(newAst);

    return output;
}