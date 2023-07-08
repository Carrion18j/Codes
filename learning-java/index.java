// import java.lang.reflect.Array;
// import java.util.Scanner;

public class Index {
    /*
     * // decleration of a function that returns a + b
     * public static int add(int a, int b) {
     * return a + b;
     * }
     */

    public static void main(String[] args) {

        /*
         * // primitive data types
         * int a = 1;
         * short b = 2;
         * long c = 3;
         * double d = 2;
         * float e = 3.141592653589f;
         * char f = 'a';
         * boolean g = true;
         * byte h = 127;
         */

        /*
         * // taking user input
         * System.out.println("Enter 1st number");
         * 
         * Scanner sc = new Scanner(System.in);
         * 
         * float num1 = sc.nextFloat();
         * 
         * System.out.println("Enter 2st number");
         * float num2 = sc.nextFloat();
         * 
         * float result = num1 + num2;
         * 
         * System.out.println("The sum of two numbers: " + result);
         */

        /*
         * // String methods
         * String str = "Hello world!";
         * System.out.println(str.length());
         * System.out.println(str.toLowerCase());
         * System.out.println(str.toUpperCase());
         * System.out.println(str.charAt(3));
         */

        /*
         * // enhanced switch statements
         * //NO NEED OF BREAK
         * int num = 1;
         * switch (num) {
         * case 0 -> System.out.println("num is 0");
         * case 1 -> System.out.println("num is 1");
         * default -> System.out.println("num is (i dont know )");
         * }
         */

        /*
         * // adition of first even number's
         * int iterations = 5;
         * int sum = 0;
         * for (int i = 1; i <= iterations; i++) {
         * System.out.println(i * 2);
         * sum += i * 2;
         * }
         * System.out.println("The sum of first " + iterations + " even num is " + sum);
         */

        /*
         * // decleration of an array
         * int[] a = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
         * 
         * // for in loop
         * for (int i : a) {
         * System.out.println(i);
         * }
         */

        /*
         * // multipi dimension arrays
         * int[][][] a = { { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } },
         * { { 11, 12, 13 }, { 14, 15, 16 }, { 17, 18, 19 } },
         * { { 21, 22, 23 }, { 24, 25, 26 }, { 27, 28, 29 } } };
         * 
         * for (int i = 0; i < a.length; i++) {
         * for (int j = 0; j < a[i].length; j++) {
         * for (int k = 0; k < a[i][j].length; k++) {
         * System.out.print("\t" + a[i][j][k]);
         * }
         * System.out.println("");
         * }
         * System.out.println("");
         * }
         */

        /*
         * // reversing an array
         * int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
         * int arrLegth = arr.length;
         * int n = Math.floorDiv(arrLegth, 2);
         * int temp;
         * 
         * for (int i = 0; i < n; i++) {
         * temp = arr[i];
         * arr[i] = arr[arrLegth - i - 1];
         * arr[arrLegth - i - 1] = temp;
         * }
         * 
         * for (int e : arr) {
         * System.out.print(e + " ");
         * }
         */

        /*
         * // Ways of calling mathods (or functions)
         * Index obj = new Index();
         * System.out.println(obj.adding(1, 2));
         * 
         * System.out.println(addingNum(1, 2));
         */

        /*
         * // star pattern
         * int num = 5;
         * for (int i = 1; i <= num; i++) {
         * for (int j = i; j >= 1; j--) {
         * System.out.print("*");
         * }
         * System.out.println("");
         * }
         */

    }

    /*
     * static int addingNum(int a, int b) {
     * return a + b;
     * }
     * 
     * int adding(int a, int b) {
     * return a + b;
     * }
     */

}
