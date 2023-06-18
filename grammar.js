module.exports = grammar({
  name: "monkey_lang",

  rules: {
    block: ($) => repeat($._statement),

    _statement: ($) =>
      choice($.let_statement, $.return_statement, $.expression_statement),

    let_statement: ($) => seq("let", $.identifier, "=", $._expression, ";"),
    return_statement: ($) => seq("return", $._expression, ";"),
    expression_statement: ($) => seq($._expression, ";"),

    identifier: (_) => /[a-zA-Z_][a-zA-Z0-9_]*/,

    _expression: ($) => choice($.identifier, $.number, $.boolean_literal),

    number: (_) => /[0-9]+/,
    boolean_literal: (_) => choice("true", "false"),
  },
});
