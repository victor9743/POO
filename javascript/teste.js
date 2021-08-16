class Banco  {

    constructor(){

        this.mensagem = "Mensagem";
        this.nomeConta = "",
        this.saldo = 2000,
        this._encapsulamento = "ok, deu certo";


    }

    //  getters e setters

    // get - pegar valor
    get encapsulamento(){
        return this._encapsulamento;
    }

    // set - setar valor
    set encapsulamento(valor){

        this._encapsulamento = valor

    }

    depositar(valor){

        if(valor === 0 || valor < 0 ){

            return "O valor do deposito deve se maior do que R$ 0,00";
        }
        else{
            this.saldo += valor;
    
            return "Deposito realizado com sucesso, novo valor R$"+ this.saldo;

        }
    
    }
    transferencia(valor){
        if(valor <=0 ){

            return "O valor de transferencia deve ser maior que R$ 0,00";

        }
        else if(valor > this.saldo){

            return "O valor de transferencia é maior que o saldo disponivel";
        }
        else{

            this.saldo -= valor;

            return "Transferencia de R$ " + valor  + " realizada com sucesso. Seu novo saldo é de R$ "+ this.saldo

        }

    }
// fim da classe
}


let n1 = new Banco();

n1.encapsulamento = "alterar"

console.log(n1.encapsulamento);



