import React from "react";
import Filmes from "../components/Filmes";

export default function Plans() {
  return (
    <div className="container">
      <h1>Planos</h1>
      <div className="row">
        <div className="col-md-4">
          <Filmes
            title="Plano Básico"
            description="Assista em apenas uma tela por vez. Sem HD ou Ultra HD disponíveis."
            price="$9.99/mês"
          />
        </div>
        <div className="col-md-4">
          <Filmes
            title="Plano Padrão"
            description="Assista em até duas telas simultaneamente. Disponível em HD, mas sem Ultra HD."
            price="$15.99/mês"
          />
        </div>
        <div className="col-md-4">
          <Filmes
            title="Plano Premium"
            description="Assista em até quatro telas simultaneamente. Disponível em HD, Ultra HD e 4K (se disponível)."
            price="$19.99/mês"
          />
        </div>
      </div>
    </div>
  );
}
