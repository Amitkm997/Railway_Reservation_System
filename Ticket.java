public class Ticket {

    // Instance Variables
    private int ticketId;
    private Passenger passenger;
    private Train train;
    private int seatNumber;
    private String status;

    // Constructor
    public Ticket(int ticketId, Passenger passenger, Train train, int seatNumber, String status) {
        this.ticketId = ticketId;
        this.passenger = passenger;
        this.train = train;
        this.seatNumber = seatNumber;
        this.status = status;
    }

    // Getter Methods
    public int getTicketId() {
        return ticketId;
    }

    public Passenger getPassenger() {
        return passenger;
    }

    public Train getTrain() {
        return train;
    }

    public int getSeatNumber() {
        return seatNumber;
    }

    public String getStatus() {
        return status;
    }

    // Setter for Status (Useful for cancellation later)
    public void setStatus(String status) {
        this.status = status;
    }

    // Display Ticket Details
    public void displayTicket() {

        System.out.println("========================================");
        System.out.println("            TICKET DETAILS              ");
        System.out.println("========================================");

        System.out.println("Ticket ID        : " + ticketId);

        System.out.println("\nPassenger Details");
        System.out.println("----------------------------------------");
        System.out.println("Name             : " + passenger.getName());
        System.out.println("Age              : " + passenger.getAge());
        System.out.println("Gender           : " + passenger.getGender());
        System.out.println("Phone Number     : " + passenger.getPhoneNumber());

        System.out.println("\nTrain Details");
        System.out.println("----------------------------------------");
        System.out.println("Train No         : " + train.getTrainNo());
        System.out.println("Train Name       : " + train.getTrainName());
        System.out.println("Source           : " + train.getSource());
        System.out.println("Destination      : " + train.getDestination());

        System.out.println("\nBooking Details");
        System.out.println("----------------------------------------");
        System.out.println("Seat Number      : " + seatNumber);
        System.out.println("Booking Status   : " + status);

        System.out.println("========================================");
    }
}