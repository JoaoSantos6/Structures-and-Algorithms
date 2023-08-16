//  |  __ \_   _| |    | |  | |   /\    
//  | |__) || | | |    | |__| |  /  \   
//  |  ___/ | | | |    |  __  | / /\ \  
//  | |    _| |_| |____| |  | |/ ____ \ 
//  |_|   |_____|______|_|  |_/_/    \_\
//@autor: João Vitor Oliveira
//Nível de complexidade: O(N) ARRAY -> O(1) OBJETO
//Função: Organização de Array LIFO (Last In -> First Out)
//Prática

class Stack {
    constructor() {
        this.count = 0;
        this.items = [];
    }
    
    //adiciona um elemento no topo da pilha. Ou seja, no final do array;
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    //remove o último elemento da pilha. Ou seja, o que está no topo;
    pop() {
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    //retorna o elemento que está no topo da pilha. Ou seja, o último item do array.
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1];
    }

    //verifica se a pilha está vazia ou não, retornando true para vazia e false para não vazia.
    isEmpty() {
        return this.count === 0;
    }

    //retorna o tamanho da pilha utilizando o nome 'size' ao invés de 'length'. Serve para boas práticas.
    size() {
        return this.count;
    }

    //esvazia toda a pilha.
    clear() {
        this.items = {};
        this.count = 0;
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = '${this.items[0]}';
        for(let i = 1; i < this.count; i++){
            objString = '${objString},${this.items[i]}';
        }
        return objString;
    }
}
