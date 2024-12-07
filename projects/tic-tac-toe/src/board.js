import { WINNER_COMBOS } from "./constants";

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (boardToCheck[a] == boardToCheck[b] && boardToCheck[a] == boardToCheck[c]){
        //hay ganador
        return boardToCheck[a]
      }
    }
    // no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    //Checkear que no hay espacios vacios
    return newBoard.every((square) => square != null)
}