import java.util.Scanner;

import javax.swing.text.StyledEditorKit;

public class Main {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);

        RailwaySystem railwaySystem=new RailwaySystem();

        int choice;

        do{
            System.out.println("\n==============================================");
            System.out.println("             Railway Reservation System         ");
            System.out.println("\n==============================================");
            System.out.println("1. View All Trains");
            System.out.println("2. Search Train");
            System.out.println("3. Search Train by source and destination");
            System.out.println("4. Book Ticket");
            System.out.println("5. Search Ticket");
            System.out.println("6. Cancel Ticket");
            System.out.println("7. View All Tickets");
            System.out.println("8. Booking Statistics");
            System.out.println("9. Exit");

            choice=sc.nextInt();

            switch (choice) {
                case 1:
                    railwaySystem.displayAllTrains();
                    break;

                case 2:
                    System.out.print("Enter Train Number");
                    int trainNo=sc.nextInt();
                    Train train =railwaySystem.searchTrainByNumber(trainNo);

                    if(train!=null){
                        System.out.println("\nTrain Fount\n");
                        train.displayTrain();
                    }else{
                        System.out.println("\nTrain not found\n");
                    }
                    
                    break;
                case 3:
                    sc.nextLine();

                    System.out.println("Enter Source: ");
                    String source=sc.nextLine();

                    System.out.println("Enter Destination: ");
                    String destination=sc.nextLine();

                    railwaySystem.searchTrainBySourceDestination(source,destination);
                    break;
                case 4:
                    railwaySystem.bookTicket();
                    break;

                case 5:
                    System.out.print("Enter Ticket ID");
                    int ticketId=sc.nextInt();

                    railwaySystem.searchTicket(ticketId);
                    break;
                
                case 6:
                    System.out.println("Enter Ticket ID");
                    int cancelTicketId=sc.nextInt();

                    railwaySystem.cancelTicket(cancelTicketId);
                    break;

                case 7:
                    railwaySystem.displayAllTickets();
                    break;

                case 8:
                    railwaySystem.bookingStatics();
                    break;
                
                case 9:
                    System.out.println("\nThank you for using railway reservation system.");
                default:
                    break;
            }

        }while(choice != 5);
        sc.close();
    }
}
