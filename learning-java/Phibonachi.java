public class Phibonachi {

    // phibonachi series with recursion
    static int[] phibonachi(int a) {
        int[] resultArr = new int[a];
        resultArr[0] = 0;
        resultArr[1] = 1;

        for (int i = 0; i < a - 2; i++) {
            resultArr[i + 2] = resultArr[i + 1] + resultArr[i];
        }

        return resultArr;
    }

    public static void main(String[] args) {

        // phibonachi series with recursion
        int[] arr = phibonachi(10);
        for (int i : arr) {
            System.out.println(i);
        }

    }
}
