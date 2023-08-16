//   ______ _____ _               
//  |  ____|_   _| |        /\    
//  | |__    | | | |       /  \   
//  |  __|   | | | |      / /\ \  
//  | |     _| |_| |____ / ____ \ 
//  |_|    |_____|______/_/    \_\
//@autor: João Vitor Oliveira
//Nível de complexidade: O(N) ARRAY -> O(1) OBJETO
//Função: Organização de Array FIFO (First In -> First Out)
//Prática

class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    
    //adiciona elementos no final da fila;
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    //remoção de itens da fila. Ou seja, o primeiro item adicionado à fila será removido;
    dequeue() {
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    //retorna o elemento que está no início da fila. Ou seja, o primeiro item do array.
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    //verifica se a fila está vazia ou não, retornando true para vazia e false para não vazia.
    isEmpty() {
        return this.size() === 0;
    }

    //retorna o tamanho da fila utilizando o nome 'size' ao invés de 'length'. Serve para boas práticas.
    size() {
        return this.count - this.lowestCount;
    }

    //esvazia toda a fila.
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    //
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = '${this.items[lowestCount]}';
        for(let i = 1; i < this.count; i++){
            objString = '${objString},${this.items[i]}';
        }
        return objString;
    }
}