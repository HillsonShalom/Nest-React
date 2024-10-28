
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { UserDocument } from '../entities/user.schema';

export interface UpdateUserDto extends Partial<UserDocument> {}
