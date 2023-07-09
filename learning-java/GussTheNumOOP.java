import java.util.Random;
import java.util.Scanner;

public class GussTheNumOOP {

    static class Guss {
        private int randNum;

        public Guss() {
            Random random = new Random();
            randNum = random.nextInt(1, 20);
        }

        public void gussNumber() {
            try (Scanner sc = new Scanner(System.in)) {
                System.out.print("Enter your number : ");
                int userNum = sc.nextInt();

                if (userNum == randNum) {
                    rightGuss();
                } else if (userNum > randNum) {
                    System.out.println("Your Num Is Greater Than The Actual Number ");
                    gussNumber();
                } else {
                    System.out.println("Your Num Is Less Than The Actual Number ");
                    gussNumber();
                }
            }
        }

        public void rightGuss() {
            System.out.println("You Win the correct answer is: " + randNum);
        }

    }

    public static void main(String[] args) {
        Guss guss = new Guss();
        guss.gussNumber();
    }
}
