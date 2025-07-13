import { MarketingEntity } from 'src/Entities/Base.entity';

export class Item extends MarketingEntity {
  name: string;
  description: string;
  price: number;
  image?: string;
}
