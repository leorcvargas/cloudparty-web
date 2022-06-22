export interface GameServer {
  id: string;
  name: string;
  hostname: string;
  port: number;
  type: "MINECRAFT";
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
