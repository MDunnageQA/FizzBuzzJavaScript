var fizz, buzz, fizzBuzz, noFizzBuzz
fizz = "fizz!"; buzz = "buzz!"; fizzBuzz = "fizz buzz!"; noFizzBuzz = "no fizz buzz!";

for (num = 1; num <= 100; num++) 
{
    if (num % 3 == 0 && num % 5 == 0)
    {
        console.log(fizzBuzz);
    }
    else if (num % 3 == 0)
    {
        console.log(fizz);
    }
    else if (num % 5 == 0)
    {
        console.log(buzz);
    }
    else
    {
        console.log(noFizzBuzz);
    }
}