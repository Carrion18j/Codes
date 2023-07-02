#include <iostream>

int addNumber(int x, int y)
{
    return x + y;
}

int main()
{

    int num1;
    int num2;

    std::cout << "Please Enter Num 1: " << std::endl;
    std::cin >> num1;
    std::cout << "Please Enter Num 2: " << std::endl;
    std::cin >> num2;

    int result = addNumber(num1, num2);

    std::cout << "The sum of your two numbers is: " << result << std::endl;

    return 0;
}