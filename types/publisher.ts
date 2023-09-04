import Game from "@/types/game";

export default interface Publisher {
  id: number
  name: string
  created_at: Date
  games: Game[]
}