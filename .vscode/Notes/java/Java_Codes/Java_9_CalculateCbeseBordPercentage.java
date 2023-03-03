import java.util.Scanner;
public class Java_9_CalculateCbeseBordPercentage
{
	public static void main(String earg[]){
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your Maths marks: ");
		float Maths = sc.nextFloat();
		System.out.println("Enter your Physics marks: ");
		float Physics = sc.nextFloat();
		System.out.println("Enter your Chemistry marks: ");
		float Chemistry = sc.nextFloat();
		System.out.println("Enter your Biology marks: ");
		float Biology = sc.nextFloat();
		float sumOfMarks = ((Maths+Physics+Chemistry+Biology)/400f)*100;
		System.out.println("You got total "+sumOfMarks+"% out of 100%");
	}
}
