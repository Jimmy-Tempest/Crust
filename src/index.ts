import { tokenizer, parser, transformer, codeGenerator } from "./utils";




function compile(input: string) {
    const tokens = tokenizer(input);
    const ast = parser(tokens);
    const newAst = transformer(ast);
    const output = codeGenerator(newAst);

    return output;
}

export { compile };