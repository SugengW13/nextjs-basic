import Publisher from "@/types/publisher";

export default interface Game {
  id: number
  title: string
  published_at: Date
  created_at: Date
  publisher_id: number
  publisher: Publisher
}