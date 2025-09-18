// Classe dos Herois
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`O ${this.tipo}, ${this.nome} atacou usando sua ${ataque}.`);
  }
}

// Criando os heróis
const heroi1 = new Heroi("DragonKnigth", 30, "guerreiro");
const heroi2 = new Heroi("SoulMaster", 70, "mago");
const heroi3 = new Heroi("DarkLord", 25, "monge");
const heroi4 = new Heroi("Kitana", 28, "ninja");

// Testando ataques
heroi1.atacar(); // O guerreiro atacou usando espada.
heroi2.atacar(); // O mago atacou usando magia.
heroi3.atacar(); // O monge atacou usando artes marciais.
heroi4.atacar(); // O ninja atacou usando shuriken.
