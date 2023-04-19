import { Controller, Get, Param } from '@nestjs/common';
import { AutocompleteService } from './autocomplete.service';
import {Public} from "../auth/decorators/public.decorator";

@Controller('autocomplete')
export class AutocompleteController {
  constructor(private autocompleteService: AutocompleteService) {}

  @Public()
  @Get('/group/:part')
  getGroups(@Param('part') part: string) {
    return this.autocompleteService.findGroupsByName(part);
  }

  @Get('/lesson/:part')
  getLessons(@Param('part') part: string) {
    return this.autocompleteService.findLessonsByName(part);
  }
}
