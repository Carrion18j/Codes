public class OOP {

    /*
     * //Eg 1
     * static class Employ {
     * int age;
     * String name;
     * boolean employed;
     * 
     * String isEmploy = employed ? "employed" : "unemployed";
     * 
     * public void userData() {
     * System.out.println("Hi I am " + name + " and I am " + age +
     * " year old and I am currently " + isEmploy);
     * }
     * }
     */

    /*
     * //Eg 2
     * static class Circle {
     * float redious;
     * float pi = 22 / 7;
     * 
     * public float getRedious() {
     * return (redious * redious) * pi;
     * }
     * 
     * public float getCircumference() {
     * return 2 * pi * redious;
     * }
     * }
     */

    /*
     * // Eg 3
     * public static class GetSet {
     * private int userAge;
     * private String userName;
     * private String userJob;
     * 
     * // Coustructor method
     * public GetSet(String name, int age, String job) {
     * userAge = age;
     * userName = name;
     * userJob = job;
     * }
     * 
     * public String getName() {
     * return userName;
     * }
     * 
     * public int getAge() {
     * return userAge;
     * }
     * 
     * public String getJob() {
     * return userJob;
     * }
     * 
     * }
     */

    // Eg 4 constructor inheritance
    public static class Inherit {
        private int userAge;
        private String userName;

        Inherit(String userName, int userAge) {
            this.userName = userName;
            this.userAge = userAge;
        }

        public void display() {
            System.out.println(userName + " is " + userAge + " old");
        }
    }

    public static class Inheritance extends Inherit {
        Inheritance(String userName, int userAge) {
            super(userName, userAge);
        }

    }

    public static void main(String[] args) {

        /*
         * //Eg 1
         * Employ cherry = new Employ(); // Instentiating a new Employ object
         * Employ berry = new Employ(); // Instentiating a new Employ object
         * 
         * // setting attribute for cherry
         * cherry.name = "Cherry";
         * cherry.age = 15;
         * cherry.employed = false;
         * 
         * // setting attribute for berry
         * berry.name = "Berry";
         * berry.age = 21;
         * berry.employed = true;
         * 
         * cherry.userData();
         * berry.userData();
         */

        /*
         * //Eg 2
         * Circle circle = new Circle();
         * circle.redious = 7;
         * System.out.println("circle radious: " + circle.getRedious());
         * System.out.println("circle circumfrence: " + circle.getCircumference());
         */

        /*
         * // Eg 3 Getter and setter methods
         * GetSet newGetSet = new GetSet("cherry", 14, "software Engineer");
         * System.out.println(newGetSet.getName());
         * System.out.println(newGetSet.getAge());
         * System.out.println(newGetSet.getJob());
         */

        // Eg 4 constructor inheritance
        Inheritance innerInstance = new Inheritance("cherry", 12);
        innerInstance.display();
    }

}
