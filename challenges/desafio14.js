db.produtos.find(
  { ingredientes: "picles" },
  { nome: 1, ingredientes: 1, valoresNutricionais: { $slice: [0, 3] }, _id: 0 },
);
