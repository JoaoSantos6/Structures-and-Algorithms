//   _____  ______ ____  _    _ ______ 
//  |  __ \|  ____/ __ \| |  | |  ____|
//  | |  | | |__ | |  | | |  | | |__   
//  | |  | |  __|| |  | | |  | |  __|  
//  | |__| | |___| |__| | |__| | |____ 
//  |_____/|______\___\_\\____/|______|                                 
//@autor: João Vitor Oliveira
//Nível de complexidade: O(N) ARRAY -> O(1) OBJETO
//Função: Organização de Array FIFO (First In -> First Out) e LIFO (Last In -> First Out) ao mesmo tempo.
//Prática

class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    //adiciona o elemento na frente da fila
    addFront(element){
        if(this.isEmpty()){
            //caso o deque esteja vazio, chama-se o metodo addBack para adicionar o elemento no fim da fila.
            //Como o metodo addBack ja possui a incrementacao da variavel count, ele sera chamado para evitar
            //duplicidade 
            this.addBack(element);

        }else if(this.lowestCount > 0){
            //caso ja tenha acontecido uma remocao pela frente, o lugar vazio no inicio sera reutilizado,
            //retornando uma posicao da variavel contadora lowestCount
            this.lowestCount--;
            this.items[this.lowestCount]=element;
        }else{
            //Para adicionar um novo elemento na primeira chave ou posicao, deve-se mover todos os
            //elementos para a proxima posicao a fim de deixar o primeiro index livre
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[i -1];
            }
        }
        this.count++;
        this.lowestCount = 0;
        this.items[0] = element;
    }

    //adiciona elementos no final da fila;
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
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
