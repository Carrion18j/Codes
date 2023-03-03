import java.util.Scanner;
import java.lang.Math;

public class Java_1_RockPaperCizerVScomputer
{
	public static void main(String earg[]){
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter name of player 1: ");
		String player1 = sc.nextLine();
		System.out.println("How meny time you want to play this game ?");
		int x = sc.nextInt();
		for(int i = 1; i <= x; i++){
		System.out.println(player1+" plese chose from 1 , 2 , 3 for Rock/Paper/Cizer");
		int player1chose = sc.nextInt();
		int rand = (int)(Math.random() * 3) + 1;
		System.out.println("Computer choose "+rand);
		if((player1chose == 1) && (rand == 2)){
				System.out.println("Computer Wins ,paper grabs rock");
			}
		else if((player1chose == 1) && (rand == 3)){
				System.out.println(player1+" Wins ,rock breaks cizer");
			}
		else if((player1chose == 2) && (rand == 1)){
				System.out.println(player1+" Wins ,paper grabs rock");
			}
		else if((player1chose == 2) && (rand == 3)){
				System.out.println("Computer Wins ,cizer cuts paper");
			}
		else if((player1chose == 3) && (rand == 1)){
				System.out.println("Computer Wins ,rock breaks cizer");
			}
		else if((player1chose == 3) && (rand == 2)){
				System.out.println(player1+" Wins ,cizer cuts paper");
		}
		else if (player1chose == rand){
				System.out.println("Tie both choose same ");
			}
		else{
			System.out.println("Invalid Choice ,plese rerun the code and chose from 1 ,2 ,3");
		}
		}
	}
}
