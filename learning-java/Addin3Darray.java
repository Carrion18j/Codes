public class Addin3Darray {
    public static void main(String[] args) {

        // adding 3d arrays (I think its naw like a project )

        int[][][] matrix1 = { { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } },
                { { 11, 12, 13 }, { 14, 15, 16 }, { 17, 18, 19 } },
                { { 21, 22, 23 }, { 24, 25, 26 }, { 27, 28, 29 } } };

        int[][][] matrix2 = { { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } },
                { { 11, 12, 13 }, { 14, 15, 16 }, { 17, 18, 19 } },
                { { 21, 22, 23 }, { 24, 25, 26 }, { 27, 28, 29 } } };

        int[][][] result = { { { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 } },
                { { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 } },
                { { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 } } };

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                for (int k = 0; k < 3; k++) {
                    System.out.print(matrix1[i][j][k] + "\t");
                    result[i][j][k] = matrix1[i][j][k] + matrix2[i][j][k];
                }
                System.out.println("");
            }
            System.out.println("");
        }

        for (int i = 0; i < result.length; i++) {
            for (int j = 0; j < result[i].length; j++) {
                for (int k = 0; k < 3; k++) {
                    System.out.print(result[i][j][k] + "\t");
                }
                System.out.println("");
            }
            System.out.println("");
        }

    }
}
