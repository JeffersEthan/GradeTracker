import java.sql.SQLOutput;
import java.util.Scanner;

public class Driver {

    private static String[][] getGrid(){
        String grid[][] = new String[3][3];
        grid[0][0] = " ";
        grid[0][1] = " ";
        grid[0][2] = " ";
        grid[1][0] = " ";
        grid[1][1] = " ";
        grid[1][2] = " ";
        grid[2][0] = " ";
        grid[2][1] = " ";
        grid[2][2] = " ";
        return grid;
    }


    public static void main(String[] args) {

        Board board = new Board(getGrid());
        CPU cpu = null;
        String human = "x";
        Scanner in = new Scanner(System.in);
        System.out.println("Welcome to Tic-Tac-Toe!");
        System.out.println("Play against another person: Enter 1");
        System.out.println("Play against computer: Enter 2");
        boolean againstCPU = false;
        if (in.next().equals("2")){
            System.out.println("Select Difficulty: ");
            System.out.println("Easy: 1");
            System.out.println("Hard: 2");
            String cpuChoice = in.next();
            System.out.println("Select 1 to go first. Select 2 to go second.");
            String first = in.next();
            if (cpuChoice.equals("1")){
                if (first.equals("1")) {
                    cpu = new CPU(board, "o", true);
                } else {
                    cpu = new CPU(board, "x", true);
                    human = "o";
                }
            } else {
                if (first.equals("1")) {
                    cpu = new CPU(board, "o", false);
                } else {
                    human = "o";
                    cpu = new CPU(board, "x", false);
                }
            }
            againstCPU = true;


        }
        boolean gameOver = false;
        int counter = 0;
        while (!gameOver){
            String player = "";
        if (counter % 2 == 0){
            player = "x";
        } else {
            player = "o";
        }
            int move = 999;

            if (!againstCPU){
                System.out.println(board.showBoard());
                System.out.println("It is now " + player + "'s turn!");
                System.out.println("Pick a position (1-9) to play!");
                move = Integer.parseInt(in.next());
            } else {
                if (player.equals("x") && human.equals("x")){
                    System.out.println(board.showBoard());
                    System.out.println("It is now your turn!");
                    System.out.println("Pick a position (1-9) to play!");
                    move = Integer.parseInt(in.next());
                } else if (player.equals("x")) {
                    move = cpu.determineMove();
                } else if (human.equals("o")){
                    System.out.println(board.showBoard());
                    System.out.println("It is now " + player + "'s turn!");
                    System.out.println("Pick a position (1-9) to play!");
                    move = Integer.parseInt(in.next());
                } else {
                    move = cpu.determineMove();
                }
            }



            board.decipherPosition(move, player);
            if (board.gameOver(move, player)){
                gameOver = true;
                System.out.println(player + " WINS!");
                System.out.println(board.showBoard());
            } else if (board.draw()){
                gameOver = true;
                System.out.println("DRAW");
                System.out.println(board.showBoard());
            }
            counter++;
        }

    }



}
