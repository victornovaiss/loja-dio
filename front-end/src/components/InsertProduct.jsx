import React, { useState } from "react";

export default function InsertProduct() {

    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        if (nome === "" || valor === "") {
            alert("Preencha todos os campos!");

        }else{
            const response = await fetch("http://localhost:5000/produtos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nome:nome, valor:valor })
            });
            const resposta = await response.json();
            console.log(resposta);
        }
    }

    function handleChangeProduct(e) {
        setNome(e.target.value);
    }

    function handleChangePrice(e) {
        setValor(e.target.value);
    }

    return (
        <div>
            <label>Nome do produto</label>
            <input type="text" onChange={handleChangeProduct} />
            <label>Preço</label>
            <input type="number" onChange={handleChangePrice} />
            <button onClick={handleSubmit}>Cadastrar produto</button>
        </div>
    );
}