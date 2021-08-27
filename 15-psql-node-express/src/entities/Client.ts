import { Entity, BaseEntity, Column, PrimaryColumn } from 'typeorm';

@Entity('client')
export class Client extends BaseEntity {
  @PrimaryColumn({
    type: 'numeric',
  })
  id: number;

  @Column({
    length: 150,
    nullable: false,
  })
  first_name: string;

  @Column({
    length: 150,
    nullable: false,
  })
  last_name: string;

  @Column({
    unique: true,
    length: 150,
    nullable: false,
  })
  email: string;

  @Column({
    default: true,
    nullable: false,
  })
  is_active: boolean;

  @Column({
    unique: true,
  })
  card_number: number;

  @Column({
    type: 'numeric',
  })
  balance: number;
}
