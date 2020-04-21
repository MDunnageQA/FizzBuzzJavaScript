var fizz, buzz, fizzBuzz, noFizzBuzz
fizz = "fizz!"; buzz = "buzz!"; fizzBuzz = "fizz buzz!"; noFizzBuzz = "no fizz buzz!";

for (num = 1; num <= 100; num++) 
{
    if (num % 3 == 0 && num % 5 == 0)
    {
        console.log(num, ";", fizzBuzz);
    }
    else if (num % 3 == 0)
    {
        console.log(num, ":", fizz);
    }
    else if (num % 5 == 0)
    {
        console.log(num, ":",buzz);
    }
    else
    {
        console.log(num, ":", noFizzBuzz);
    }
}