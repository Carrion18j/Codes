#include <iostream>

int get_value(){
    return 3;
}

int main(){
    constexpr int value = 1;
    std::cout << "value : " << value << std::endl;
    return 0;
}