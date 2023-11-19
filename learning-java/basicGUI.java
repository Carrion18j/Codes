import javax.swing.JOptionPane;

public class basicGUI {
    public static void main(String[] args){
        String name = JOptionPane.showInputDialog("Enter your name ");

        int age = Integer.parseInt(JOptionPane.showInputDialog("Enter your age "));

        JOptionPane.showMessageDialog(null, "Hello "+ name +" you are "+ age + " years old");
        
    }
}