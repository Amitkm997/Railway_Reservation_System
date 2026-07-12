public class Passenger {

    // Instance Variables
    private String name;
    private int age;
    private String gender;
    private String phoneNumber;

    // Constructor
    public Passenger(String name, int age, String gender, String phoneNumber) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
    }

    // Getter Methods
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    // Display Passenger Details
    public void displayPassenger() {
        System.out.println("----------------------------------------");
        System.out.println("Passenger Name : " + name);
        System.out.println("Age            : " + age);
        System.out.println("Gender         : " + gender);
        System.out.println("Phone Number   : " + phoneNumber);
        System.out.println("----------------------------------------");
    }
}
