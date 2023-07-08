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

    // Eg 3
    public static class GetSet {
        private int age;
        private String name;
        private String job;

        public void setName(String e) {
            name = e;
        }

        public String getName() {
            return name;
        }

        public void setAge(int e) {
            age = e;
        }

        public int getAge() {
            return age;
        }

        public void setJog(String e) {
            job = e;
        }

        public String getJob() {
            return job;
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
         * //Eg 3
         * GetSet newGetSet = new GetSet();
         * newGetSet.setName("Cherry");
         * newGetSet.setAge(19);
         * newGetSet.setJog("Software Doveloper");
         * System.out.println(newGetSet.getName());
         * System.out.println(newGetSet.getAge());
         * System.out.println(newGetSet.getJob());
         */

    }

}