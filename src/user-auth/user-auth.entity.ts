import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  email: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column({ default: false })
  isVerified: boolean;
  @Column({ nullable: true })
  otp: number;
}
