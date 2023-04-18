import { Module } from '@nestjs/common';
import { AutocompleteController } from './autocomplete.controller';
import { AutocompleteService } from './autocomplete.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Lesson } from '../../schemas/lesson.schema';

@Module({
  controllers: [AutocompleteController],
  providers: [AutocompleteService],
  imports: [MongooseModule.forFeature([{ name: Lesson.name, schema: Lesson }])],
})
export class AutocompleteModule {}
