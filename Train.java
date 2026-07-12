public class Train {

    // Instance Variables
    private int trainNo;
    private String trainName;
    private String source;
    private String destination;
    private int totalSeats;
    private int availableSeats;

    // Constructor
    public Train(int trainNo, String trainName, String source, String destination, int totalSeats) {
        this.trainNo = trainNo;
        this.trainName = trainName;
        this.source = source;
        this.destination = destination;
        this.totalSeats = totalSeats;
        this.availableSeats = totalSeats;
    }

    // Getter Methods
    public int getTrainNo() {
        return trainNo;
    }

    public String getTrainName() {
        return trainName;
    }

    public String getSource() {
        return source;
    }

    public String getDestination() {
        return destination;
    }

    public int getTotalSeats() {
        return totalSeats;
    }

    public int getAvailableSeats() {
        return availableSeats;
    }

    // Setter for Available Seats (useful for booking later)
    public void setAvailableSeats(int availableSeats) {
        this.availableSeats = availableSeats;
    }

    // Display Train Details
    public void displayTrain() {
        System.out.println("----------------------------------------");
        System.out.println("Train No        : " + trainNo);
        System.out.println("Train Name      : " + trainName);
        System.out.println("Source          : " + source);
        System.out.println("Destination     : " + destination);
        System.out.println("Total Seats     : " + totalSeats);
        System.out.println("Available Seats : " + availableSeats);
        System.out.println("----------------------------------------");
    }
}