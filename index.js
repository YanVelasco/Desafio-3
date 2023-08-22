class Hero{
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atack(){
        let atack;
        if (this.type === "Mago" ) {
            atack = "Magia"
            return `O ${this.type} atacou o inimigo utilizando o ${atack}`
        }else if (this.type === "Guerreiro") {
            atack = "Usou espada"
            return `O ${this.type} atacou o inimigo utilizando o ${atack}`
        }else if (this.type === "Monge") {
            atack = "Usou artes marciais"
            return `O ${this.type} atacou o inimigo utilizando o ${atack}`
        }else if (this.type === "Ninja") {
            atack = "Usou shuriken"
            return `O ${this.type} atacou o inimigo utilizando o ${atack}`
        }
    }
}

const naruto = new Hero("Naruto", 25, "Ninja").atack();
console.log(naruto);