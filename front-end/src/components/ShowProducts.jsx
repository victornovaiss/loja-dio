import React, { useEffect, useState } from "react";

export default function ShowProducts() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {

        async function loadProducts() {
            const response = await fetch("http://localhost:5000/produtos");
            const resposta = await response.json();
            setProdutos(resposta);
        }
        
        loadProducts();
    }, [produtos]);

    return (
        <div>
            <h1>Lista de produtos</h1>
            <ul>
                {
                    produtos.map((el,idx) => {
                        return <li key={idx}>{el.nome} - R$ {el.valor}</li>
                    })
                }
            </ul>
        </div>
    )
}