import java.util.Scanner;
public class Java_10_ForLoop
{
	public static void main(String earg[]){
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter you num : ");
		int x = sc.nextInt();
		for (int i = 0; i <= x; i++){
			System.out.println(i+" Cube is "+i*i*i);
		}
	}
}
