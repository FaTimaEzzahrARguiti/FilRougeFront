export enum RoomType {
  SALLE_REUNION = 'SALLE_REUNION',
  BUREAU_ETUDE = 'BUREAU_ETUDE',
  OPEN_SPACE = 'OPEN_SPACE',
  SALLE_FORMATION = 'SALLE_FORMATION'
}

export interface Room {
  id?: number;
  name: string;
  type: RoomType;
  description: string;
  capacity: string;
  image: string;
  price: number;
  coworkingSpaceId: number;
  isAvailable: boolean;
}
