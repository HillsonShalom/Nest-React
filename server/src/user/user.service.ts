import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './entities/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>){}

  create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    user.save();
  }

  async findAll() {
    return await this.userModel.find({});
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true}).exec();
    
  }

  remove(id: string) {
    this.userModel.findByIdAndDelete(id).exec();
  }
}
