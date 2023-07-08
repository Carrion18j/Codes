public class Recursion {

    static String stringReverser(String value) {
        // What is the base case here?
        if (value == "") {
            return value;
        }
        // What is the smallest amount of work that I can do in each iteration?
        return stringReverser(value.substring(1)) + value.charAt(0);
    }

    static Boolean isPalemdrome(String value) {
        // Base Condition
        if (value.length() == 0 || value.length() == 1) {
            return true;
        }
        // Recursive case
        if (value.charAt(0) == value.charAt(value.length() - 1)) {
            return isPalemdrome(value.substring(1, value.length() - 1));
        }

        return false;
    }

    static String decimalToBinery(int decimal, String result) {
        if (decimal == 0)
            return result;

        result = decimal % 2 + result;
        return decimalToBinery(decimal / 2, result);
    }

    static int sumNthNum(int num) {
        if (num <= 1)
            return num;

        return num + sumNthNum(num - 1);

    }

    public static void main(String[] args) {
        System.out.println(stringReverser("hello"));
        System.out.println(isPalemdrome("keyek"));
        System.out.println(decimalToBinery(100, ""));
        System.out.println(sumNthNum(10));
    }
}
