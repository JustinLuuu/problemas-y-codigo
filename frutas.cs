using System;
using System.Collections.Generic;
using System.Linq;

namespace csharp_code_challenges
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] canastaFrutas = {
            "banana",
            "cereza",
            "naranja",
            "manzana",
            "cereza",
            "naranja",
            "manzana",
            "banana",
            "cereza",
            "naranja",
            "sandia"};


            IDictionary<string, int> diccionario = new Dictionary<string, int>();

            foreach (string fruta in canastaFrutas)
            {
                if (!diccionario.ContainsKey(fruta))
                    diccionario.Add(fruta, 1);
                else
                    diccionario[fruta]++;
            }
                  
            diccionario.Keys.ToList().ForEach(x=> 
               Console.WriteLine("\"{0}\" se repite {1} veces.", x, diccionario[x]
            ));
        }

    }
}
