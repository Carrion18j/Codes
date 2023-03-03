import java.util.Scanner;
public class Java_2_rockPaperCizer
{
	public static void main(String earg[]){
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter name of player 1: ");
		String player1 = sc.nextLine();
		System.out.println("Enter name of player 2: ");
		String player2 = sc.nextLine();
		System.out.println(player1+" plese chose from 1 , 2 , 3 for Rock/Paper/Cizer");
		int player1chose = sc.nextInt();
		System.out.println(player2+" plese chose from 1 , 2 , 3 for Rock/Paper/Cizer");
		int player2chose = sc.nextInt();
		if((player1chose == 1) && (player2chose == 2)){
				System.out.println(player2+" Wins ,paper grabs rock");
			}
		else if((player1chose == 1) && (player2chose == 3)){
				System.out.println(player1+" Wins ,rock breaks cizer");
			}
		else if((player1chose == 2) && (player2chose == 1)){
				System.out.println(player1+" Wins ,paper grabs rock");
			}
		else if((player1chose == 2) && (player2chose == 3)){
				System.out.println(player2+" Wins ,cizer cuts paper");
			}
		else if((player1chose == 3) && (player2chose == 1)){
				System.out.println(player2+" Wins ,rock breaks cizer");
			}
		else if((player1chose == 3) && (player2chose == 2)){
				System.out.println(player1+" Wins ,cizer cuts paper");
			}
		else{
			System.out.println("Invalid Choice ,plese rerun the code and chose from 1 ,2 ,3");
		}
	}
}


