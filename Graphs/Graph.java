package Graphs;

import java.util.ArrayList;

public class Graph {
    int verices;
    ArrayList<ArrayList<Integer>> adj;

    Graph(int vertices){
        this.verices=vertices;

        adj=new ArrayList<>();

        for(int i=0;i<vertices;i++){
            adj.add(new ArrayList<>());
        }
    }

    public void addEdge(int source,int destination){
        adj.get(source).add(destination);
        adj.get(destination).add(source);
    }

    public void printGraph(){
        for(int i=0;i<verices;i++){
            System.out.print(i+ "->");
            for(int j:adj.get(i)){
                System.out.print(j+" ");
            }
            System.out.println();
        }
    }


}
