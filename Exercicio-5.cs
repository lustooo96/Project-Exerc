namespace Exercicio5
{
    class JuroComposto
    {
        
        
        public static decimal ObtenhaMontante(decimal capitalInicial, decimal taxaJuros, decimal prazo)
        {
            return (decimal)((double)capitalInicial * Math.Pow(((double)taxaJuros / 100.0) + 1.0, (double)prazo));
        }

        public static decimal ObtenhaJuroTotal(decimal montante, decimal capitalInicial)
        {
            return montante - capitalInicial;
        }
        
        static void Main(string[] args)
        {
            var montante = ObtenhaMontante(10000,3,3);
            
            Console.WriteLine(montante);
            var juroTotal = ObtenhaJuroTotal(montante,10000);
            Console.WriteLine(juroTotal);
        }
    }
}
