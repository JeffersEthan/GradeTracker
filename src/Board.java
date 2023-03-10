public class Board {

    private String[][] grid;

    public Board(String[][] grid) {
        this.grid = grid;
    }

    public Board (Board that){
        this(that.getGrid());
    }

    public String getPiece(int position) {
        if (position == 1) {
            return grid[0][0];
        } else if (position == 2) {
            return grid[0][1];
        } else if (position == 3) {
            return grid[0][2];
        } else if (position == 4) {
            return grid[1][0];
        } else if (position == 5) {
            return grid[1][1];
        } else if (position == 6) {
            return grid[1][2];
        } else if (position == 7) {
            return grid[2][0];
        } else if (position == 8) {
            return grid[2][1];
        } else {
            return grid[2][2];
        }
    }

    public boolean draw(){
        int counter = 0;
        for (int i = 0; i < grid.length; i++){
            for (int j = 0; j < grid.length; j++){
                if (grid[i][j].equals(" ")){
                    counter++;
                }
            }
        }
        return counter == 0;
    }


    public boolean gameOver(int mostRecentMove, String player) {
        if (mostRecentMove == 1 || mostRecentMove == 3 || mostRecentMove == 9 || mostRecentMove == 7 || mostRecentMove == 5) {
            if (mostRecentMove != 5 && getPiece(5).equals(player)) {
                if (mostRecentMove == 1 && getPiece(9).equals(player)) {
                    return true;
                } else if (mostRecentMove == 3 && getPiece(7).equals(player)) {
                    return true;
                } else if (mostRecentMove == 9 && getPiece(1).equals(player)) {
                    return true;
                } else if (mostRecentMove == 7 && getPiece(3).equals(player)) {
                    return true;
                }
            } else if (mostRecentMove == 5){
                if (getPiece(1).equals(player) && getPiece(9).equals(player)){
                    return true;
                } else if (getPiece(3).equals(player) && getPiece(7).equals(player)){
                    return true;
                }
            }
        }

        String coordinates = getCoorindates(mostRecentMove);
        int x = Integer.parseInt(coordinates.substring(0, 1));
        int y = Integer.parseInt(coordinates.substring(1));
        if (x == 0) {
            if (grid[y][x].equals(player) && grid[y][x + 1].equals(player) && grid[y][x + 2].equals(player)) {
                return true;
            }
        } else if (x == 1) {
            if (grid[y][x - 1].equals(player) && grid[y][x].equals(player) && grid[y][x + 1].equals(player)) {
                return true;
            }
        } else if (x == 2) {
            if (grid[y][x - 2].equals(player) && grid[y][x - 1].equals(player) && grid[y][x].equals(player)) {
                return true;
            }
        }

        if (y == 0) {
            if (grid[y][x].equals(player) && grid[y + 1][x].equals(player) && grid[y + 2][x].equals(player)) {
                return true;
            }
        } else if (y == 1) {
            if (grid[y - 1][x].equals(player) && grid[y][x].equals(player) && grid[y + 1][x].equals(player)) {
                return true;
            }
        } else if (y == 2) {
            if (grid[y - 2][x].equals(player) && grid[y - 1][x].equals(player) && grid[y][x].equals(player)) {
                return true;
            }
        }

        return false;
    }


    public void addPiece(String piece, int x, int y) {
        grid[y][x] = piece;
    }

    public String[][] getGrid() {
        return grid;
    }

    public void decipherPosition(int position, String player) {
        if (position == 1) {
            addPiece(player, 0, 0);
        } else if (position == 2) {
            addPiece(player, 1, 0);
        } else if (position == 3) {
            addPiece(player, 2, 0);
        } else if (position == 4) {
            addPiece(player, 0, 1);
        } else if (position == 5) {
            addPiece(player, 1, 1);
        } else if (position == 6) {
            addPiece(player, 2, 1);
        } else if (position == 7) {
            addPiece(player, 0, 2);
        } else if (position == 8) {
            addPiece(player, 1, 2);
        } else {
            addPiece(player, 2, 2);
        }
    }

    private String getCoorindates(int position) {

        if (position == 1) {
            return "00";
        } else if (position == 2) {
            return "10";
        } else if (position == 3) {
            return "20";
        } else if (position == 4) {
            return "01";
        } else if (position == 5) {
            return "11";
        } else if (position == 6) {
            return "21";
        } else if (position == 7) {
            return "02";
        } else if (position == 8) {
            return "12";
        } else {
            return "22";
        }
    }

    public String showBoard() {
        String board = "";
        for (int i = 0; i < grid.length; i++) {
            if (i == 1 || i == 2) {
                board += "---|---|---\n";
            }
            for (int j = 0; j < grid.length; j++) {
                if (j != 2) {
                    board += " " + grid[i][j] + " ";
                    board += "|";
                }
                if (j == 2 && i != 2) {
                    board += " " + grid[i][j];
                    board += "\n";
                }
                if (j == 2 && i == 2) {
                    board += " " + grid[i][j];
                }
            }
        }
        return board;
    }


}
