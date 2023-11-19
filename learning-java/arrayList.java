import java.util.*;

public class arrayList {
    public static void main(String[] args){
        // 1D ArrayList 
        ArrayList<String> food = new ArrayList<String>();

        food.add("pizza");
        food.add("burger");
        food.add("paneer");

        // 2D ArrayList
        ArrayList<ArrayList<String>> list = new ArrayList();

        list.add(food);

        System.out.println(list);

    }
}