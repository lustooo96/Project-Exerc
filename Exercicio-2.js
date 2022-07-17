interface ExpressaoMatematica{
  avaliarOperacao() : number
}

class Numero implements ExpressaoMatematica{
  constructor(
  	private valor : number
  ){}
  public avaliarOperacao(): number {
    return this.valor
  }
} 

class Soma implements ExpressaoMatematica{
  constructor(
  	private esquerda : ExpressaoMatematica,
    private direita : ExpressaoMatematica,
  ){}
  public avaliarOperacao(): number {
    return this.esquerda.avaliarOperacao() + this.direita.avaliarOperacao()
  }
}
class Subtracao implements ExpressaoMatematica{
  constructor(
  	private esquerda : ExpressaoMatematica,
    private direita : ExpressaoMatematica,
  ){}
  public avaliarOperacao(): number {
    return this.esquerda.avaliarOperacao() - this.direita.avaliarOperacao()
  }
}
class Multiplicacao implements ExpressaoMatematica{
  constructor(
  	private esquerda : ExpressaoMatematica,
    private direita : ExpressaoMatematica,
  ){}
  public avaliarOperacao(): number {
    return this.esquerda.avaliarOperacao() * this.direita.avaliarOperacao()
  }
}

class Divisao implements ExpressaoMatematica{
  constructor(
  	private esquerda : ExpressaoMatematica,
    private direita : ExpressaoMatematica,
  ){}
  public avaliarOperacao(): number {
    return this.esquerda.avaliarOperacao() / this.direita.avaliarOperacao()
  }
}

class Potencia implements ExpressaoMatematica{
  constructor(
  	private base : ExpressaoMatematica,
    private expoente : ExpressaoMatematica,
  ){}
  public avaliarOperacao(): number {
    return Math.pow(this.base.avaliarOperacao(), this.expoente.avaliarOperacao())
  }
}
const conta = new Potencia(
	new Subtracao(new Numero(6) , new Numero(1)),
  new Divisao(new Numero(6), new Numero(2))
)

console.log(conta.avaliarOperacao())
