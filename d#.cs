using System;
using System.Collections.Generic;
using System.IO;

namespace VirtualHaziTest
{
    // A Product egy absztrakt osztály
    abstract class Product
    {
        
        public abstract string code();
        public abstract int cost();

        public abstract int mennyisegg();

        public int costofone
        {
            get { return cost(); }
        }

    }
    // Ide jöhetnek egyéb osztályok
    
class egydarab : Product 
{
    int _cost;
    string _name;
    public egydarab(int cost, string name)
    {
        _cost = cost;
        _name = name;
    }
    
    public override int cost()
    {
        return _cost; 
    }
    public override string code()
    {
        return _name;
    }
    public override int mennyisegg()
    {
        return 1;
    }
    
}



class tobbdarab : Product
{
    int _cost;
    string _name;
    int mennyiseg_;

    public int mennyiseg
    {
        set
        {
            mennyiseg_ = value;
        }
    }
    public tobbdarab(int cost, string name, int mennyiseg)
    {
        _cost = cost;
        _name = name;
        mennyiseg_ = mennyiseg;
    }
    public override int cost()
    {
        return _cost;
    }
    public override string code()
    {
        return _name;
    }
    public override int mennyisegg()
    {
        return mennyiseg_;
    }

}

class csomag : Product
{
    int _cost;
    string _name;
    public override int cost()
    {
        return _cost;
    }
    public override string code()
    {
        return _name;
    }
    public override int mennyisegg()
    {
        return mennyiseg2_;
    }
    int mennyiseg2_;
    public csomag(int cost, string name, int mennyiseg)
    {
        _cost = cost;
        _name = name;
        mennyiseg2_ = mennyiseg;
    }
    public int mennyiseg2
    {
        get
        {
            return mennyiseg2_;
        }
        set
        {
            mennyiseg2_ = value;
        }
    }
}

    class Program
    {
        // Ide jöhetnek a Main által meghívott metódusok
        
public static List<Product> ReadProducts(string name)
{
    List<Product> products = new List<Product>();
    StreamReader reader = new StreamReader(name);
    while (!reader.EndOfStream)
    {
        string line = reader.ReadLine();
        string[] stomb = line.Split(' ');
        if (stomb[0][0] == 'S')
        {
            products.Add(new egydarab(int.Parse(stomb[1]), stomb[0]));
        }
        else if (stomb[0][0] == 'M')
        {
            products.Add(new tobbdarab(int.Parse(stomb[1]), stomb[0], int.Parse(stomb[2])));
        }
        else
        {
            products.Add(new csomag(int.Parse(stomb[1]), stomb[0], int.Parse(stomb[2])));
        }
    }
    
    
    return products;
}
static int csmeretxd;
public static void SetPackageSize(int meret)
{
    csmeretxd = meret;
}

public static int GetTotalCost(List<Product> ls)
{
    int osszeg = 0;
    for (int i = 0; i < ls.Count; i++)
    {
        if (ls[i] is egydarab)
        {
            osszeg += ls[i].costofone;
        }else if (ls[i] is tobbdarab)
        {
            osszeg += ls[i].costofone*ls[i].mennyisegg();
        }
        else
        {
            osszeg += ls[i].costofone * ls[i].mennyisegg()*csmeretxd;
        }
    }
    return osszeg;
}

        static void Main(string[] args)
        {
            string filename = Console.ReadLine();
            int size1 = int.Parse(Console.ReadLine());
            int size2 = int.Parse(Console.ReadLine());
            List<Product> products = ReadProducts(filename);
            SetPackageSize(size1);
            Console.WriteLine(GetTotalCost(products));
            SetPackageSize(size2);
            Console.WriteLine(GetTotalCost(products));
        }
    }
}
Írás nekik: Attila Földesi
