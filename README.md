# HashMap

Projeto de estrutura de dados desenvolvido como parte da trilha JavaScript do [The Odin Project](https://www.theodinproject.com/lessons/javascript-hashmap), com foco em implementação manual de um HashMap com tratamento de colisões.

## Objetivo do Projeto

O objetivo principal foi praticar:
- Implementação de função de hash para chaves de texto
- Armazenamento em buckets com encadeamento por arrays
- Operações de inserção, consulta e remoção
- Controle de fator de carga e redimensionamento automático
- Exposição de chaves, valores e entradas armazenadas

## O que é?

Uma implementação da classe `HashMap` em JavaScript com armazenamento interno em buckets e resolução de colisões por listas dentro de cada índice.

Quando o fator de carga ultrapassa o limite definido, o mapa dobra a capacidade e reinsere os pares chave/valor para manter a distribuição.

## Como usar

1. Entre na pasta do projeto:
   `cd Javascript/top-HashMap`
2. Execute o arquivo de demonstração:
   `node index.js`

## Funcionalidades

- **`hash(key)`**: calcula o índice da chave
- **`set(key, value)`**: adiciona ou atualiza um par chave/valor
- **`get(key)`**: retorna o valor da chave ou `null`
- **`has(key)`**: verifica se a chave existe
- **`remove(key)`**: remove uma chave e retorna `true` ou `false` de acordo com o sucesso da operação
- **`length`**: quantidade atual de pares armazenados
- **`clear()`**: limpa completamente o mapa
- **`keys`**: retorna as chaves armazenadas
- **`values`**: retorna os valores armazenados
- **`entries`**: retorna os pares chave e valor armazenados

## Estrutura de Arquivos

- `HashMap.js`: implementação da classe `HashMap`
- `index.js`: script de demonstração com inserções e consultas

## Tecnologias Utilizadas

- JavaScript (ES Modules)

---

Projeto desenvolvido seguindo: [The Odin Project - HashMap](https://www.theodinproject.com/lessons/javascript-hashmap)

📍 **Repositório principal com todos os projetos**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
