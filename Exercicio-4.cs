using System;

    
namespace Exercicio4
{
    class Media
    {
        public static double Average(double a, double b)
        {
            return (a + b) / 2;
        }
        static void Main(string[] args)
        {
            Console.WriteLine(Average(2, 1));
        }
    }
}
