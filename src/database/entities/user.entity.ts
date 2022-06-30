import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ default: true })
  isActive: boolean

  @CreateDateColumn() 
  created_at: Date

  @UpdateDateColumn() 
  updated_at: Date

  @DeleteDateColumn() 
  deleted_at: Date
}