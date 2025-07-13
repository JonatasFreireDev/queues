import { IsString, IsDate, IsBoolean } from 'class-validator';

export abstract class BaseEntity {
  @IsString()
  id: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}

export abstract class StatusEntity extends BaseEntity {
  @IsBoolean()
  isActive: boolean;

  @IsBoolean()
  isDeleted: boolean;

  @IsBoolean()
  isArchived: boolean;
}

export abstract class MarketingEntity extends StatusEntity {
  @IsBoolean()
  isFeatured: boolean;

  @IsBoolean()
  isTrending: boolean;

  @IsBoolean()
  isNew: boolean;

  @IsBoolean()
  isBestSeller: boolean;
}
