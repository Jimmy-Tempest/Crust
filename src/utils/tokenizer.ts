function tokenizer(input: string) {
    const tokens = [];
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

        if (char === ")") {
            tokens.push({
                type: "right_paren",
                value: ")"
            });
            current++;
            continue;
        }

        if (char === "{") {
            tokens.push({
                type: "left_cur",
                value: "{"
            });
            current++;
            continue;
        }

        if (char === "}") {
            tokens.push({
                type: "right_cur",
                value: "}"
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
                value
            });
            continue
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
                value
            });
            continue;
        }
        throw new Error(`Syntax error: near ${char}`)
    }
    return tokens
}

export { tokenizer };