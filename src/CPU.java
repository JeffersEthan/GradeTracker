import java.util.ArrayList;
import java.util.Arrays;

public class CPU {

    private Board board;
    private String player;
    private boolean easy;
    private boolean minPlayer;

    public CPU(Board board, String player, boolean easy) {
        this.board = board;
        this.player = player;
        this.easy = easy;
    }

    public int determineMove() {
        if (easy) {
            return easyMode();
        } else {
            return hardMode();
        }
    }

    private Board copyBoard(Board board){
        String[][] current = new String[3][3];
        for (int i = 0; i < board.getGrid().length; i++){
            for (int j = 0; j < board.getGrid().length; j++){
                current[i][j] = board.getGrid()[i][j];
            }
        }
        return new Board(current);
    }

    private int hardMode() {
        int score = -999;
        int bestScore = Integer.MIN_VALUE;
        int bestMove = 11;
        for (int i = 1; i < 10; i++) {
            if (board.getPiece(i).equals(" ")) {
                board.decipherPosition(i, player);
                if (board.gameOver(i, player)) {
                    bestMove = i;
                    break;
                } else {
                    board.decipherPosition(i, " ");
                    score = recursiveSearch(i, player, copyBoard(board));

                        if (score > bestScore) {
                            bestScore = score;
                            bestMove = i;
                        }

                }
            }
        }

        return bestMove;// position of the first largest found
    }

    private int recursiveSearch(int move, String player, Board board) {
        board.decipherPosition(move, player);
        if (board.gameOver(move, player)){
            if (player.equals(this.player)){
                return 1;
            } else {
                return -1;
            }
        } else if (board.draw()) {
            return 0;
        }

        if (player.equals("o")){
            player = "x";
        } else {
            player = "o";
        }

        if (player.equals(this.player)){
            int bestScore = -999;
            for (int i = 1; i < 10; i++){
               if (board.getPiece(i).equals(" ")){
                   int score = recursiveSearch(i, player, copyBoard(board));
                   bestScore = Math.max(score, bestScore);
               }
            }
            return bestScore;
        } else {
            int bestScore = 999;
            for (int i = 1; i < 10; i++){
                if (board.getPiece(i).equals(" ")){
                    int score = recursiveSearch(i, player, copyBoard(board));
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }

    }


    private int easyMode() {
        int random = 99;
        boolean validNumber = false;
        while (!validNumber) {
            int min = 0;
            int max = 9;
            random = (int) (Math.random() * (max - min) + min);
            if (board.getPiece(random).equals(" ")) {
                validNumber = true;
            }
        }
        return random;
    }

}
