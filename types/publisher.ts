import {Game} from "@/types/game";

export interface Publisher {
  id: number
  name: string
  created_at: Date
  games: Game[]
}