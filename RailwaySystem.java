import java.util.ArrayList;
import java.util.HashMap;
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

    // Contructor
    public RailwaySystem() {
        trains = new ArrayList<>();
        tickets = new HashMap<>();
        sc = new Scanner(System.in);

        addDefaultTrains();
    }

    // add default trains
    public void addDefaultTrains() {
        trains.add(new Train(101, "Rajdhani Epress", "Delhi", "Agra", 200));
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
    public void bookTicket(){
        System.out.print("Enter Train Number");
        int trainNo=sc.nextInt();

        Train train=searchTrainByNumber(trainNo);
       
        if(train==null){
            System.out.println("Train not Found");
            return;
        }

        if(train.getAvailableSeats()<=0){
            System.out.println("Sorry! No Seats Available.");
            return;
        }

        sc.nextLine();

        System.out.print("Enter Passenger Name: ");
        String name=sc.nextLine();
        
        System.out.print("Enter Passenger's Age: ");
        int age=sc.nextInt();

        sc.nextLine();

        System.out.print("Enter Gender: ");
        String gender=sc.nextLine();

        System.out.print("Enter Phone Number");
        String phone=sc.nextLine();

        Passenger passenger=new Passenger(name, age, gender, phone);

        int seatNumber=train.getTotalSeats()-train.getAvailableSeats()+1;

        Ticket ticket=new Ticket(nextTicketId,passenger,train,seatNumber,"Confirmed");

        tickets.put(nextTicketId,ticket);

        train.setAvailableSeats(train.getAvailableSeats()-1);

        System.out.println("\nTicket Booked Successfully\n");

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
    public void cancelTicket(int ticketId){
        // check if ticket
        if(!tickets.containsKey(ticketId)){
            System.out.println("Ticket Not Found");
            return;
        }

        // Get the ticket Object
        Ticket ticket=tickets.get(ticketId); 

        //Get the train assiciated with the ticket
        Train train=ticket.getTrain();

        //Increase available seats
        train.setAvailableSeats(train.getAvailableSeats());

        // Remove the ticket from the hashmap(tickets)
        tickets.remove(ticketId);

        System.out.println("----------------------------------------------");
        System.out.println("Ticket Cancelled Successfully!");
        System.out.println("Ticket ID : "+ticketId);
        System.out.println("----------------------------------------------");

    }
}
