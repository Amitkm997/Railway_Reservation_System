import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class RailwaySystem {
    // collection to store all trains
    private ArrayList<Train> trains;

    // Collection to store all booked tickets
    private HashMap<Integer, Ticket> tickets;

    // Scanner for user Input
    private Scanner sc;

    // Ticket ID Genrate
    private int nextTicketId = 1001;

    //Queue for waiting list
    private Queue<Passenger> waitingList;

    // Contructor
    public RailwaySystem() {
        trains = new ArrayList<>();
        tickets = new HashMap<>();
        sc = new Scanner(System.in);
        waitingList=new LinkedList<>();
        addDefaultTrains();
    }

    // add default trains
    public void addDefaultTrains() {
        trains.add(new Train(101, "Rajdhani Epress", "Delhi", "Agra", 2));
        trains.add(new Train(102, "Vande Bharat", "Varansi", "Delhi", 180));
        trains.add(new Train(103, "Shatabdi Express", "Pune", "Mumbai", 160));
        trains.add(new Train(104, "Garib Rath", "Kanpur", "Banglore", 200));
        trains.add(new Train(105, "Rajdhani Epress", "Delhi", "Agra", 200));
    }

    // display all trains

    public void displayAllTrains() {
        if (trains.isEmpty()) {
            System.out.println("No Trains Available");
            return;
        }

        for (Train train : trains) {
            train.displayTrain();
        }

    }

    // search train by train number
    public Train searchTrainByNumber(int trainNo) {
        for (Train train : trains) {
            if (train.getTrainNo() == trainNo) {
                return train;
            }

        }

        return null;
    }

    //Book Ticket
    // Book Ticket
public void bookTicket() {

    System.out.print("Enter Train Number : ");
    int trainNo = sc.nextInt();

    Train train = searchTrainByNumber(trainNo);

    if (train == null) {
        System.out.println("Train Not Found.");
        return;
    }

    sc.nextLine();

    System.out.print("Enter Passenger Name : ");
    String name = sc.nextLine();

    System.out.print("Enter Passenger Age : ");
    int age = sc.nextInt();
    sc.nextLine();

    System.out.print("Enter Passenger Gender : ");
    String gender = sc.nextLine();

    System.out.print("Enter Passenger Phone Number : ");
    String phone = sc.nextLine();

    Passenger passenger = new Passenger(name, age, gender, phone);

    // Waiting List
    if (train.getAvailableSeats() <= 0) {

        waitingList.add(passenger);

        System.out.println("\nNo Seats Available.");
        System.out.println("Passenger Added To Waiting List.");

        return;
    }

    int seatNumber = train.getTotalSeats() - train.getAvailableSeats() + 1;

    Ticket ticket = new Ticket(
            nextTicketId,
            passenger,
            train,
            seatNumber,
            "Confirmed"
    );

    tickets.put(nextTicketId, ticket);

    train.setAvailableSeats(train.getAvailableSeats() - 1);

    System.out.println("\nTicket Booked Successfully!\n");

    ticket.displayTicket();

    nextTicketId++;
}

    // search ticket
    public void searchTicket(int ticketId){
        if(tickets.containsKey(ticketId)){
            tickets.get(ticketId).displayTicket();
        }else{
            System.out.println("Ticket not foound");
        }
    }

    //cancel ticket
    public void cancelTicket(int ticketId) {

        if (!tickets.containsKey(ticketId)) {
            System.out.println("Ticket Not Found.");
            return;
        }
    
        Ticket ticket = tickets.get(ticketId);
    
        Train train = ticket.getTrain();
    
        // Increase available seats
        train.setAvailableSeats(train.getAvailableSeats() + 1);
    
        // Remove cancelled ticket
        tickets.remove(ticketId);
    
        System.out.println("----------------------------------------------");
        System.out.println("Ticket Cancelled Successfully!");
        System.out.println("Ticket ID : " + ticketId);
        System.out.println("----------------------------------------------");
    
        if (!waitingList.isEmpty()) {
    
            Passenger passenger = waitingList.poll();
    
            int seatNumber = train.getTotalSeats() - train.getAvailableSeats();
    
            Ticket ticket1 = new Ticket(
                    nextTicketId,
                    passenger,
                    train,
                    seatNumber,
                    "Confirmed"
            );
    
            tickets.put(nextTicketId, ticket1);
    
            train.setAvailableSeats(train.getAvailableSeats() - 1);
    
            System.out.println();
            System.out.println("Seat Allocated To Waiting Passenger");
            ticket1.displayTicket();
    
            nextTicketId++;
        }
    
    }
}
