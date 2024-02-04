import { IsString, IsEmail } from 'class-validator';

export class NewPostDto {
  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsEmail()
  userEmail: string;
}