import { Controller, Get, Param } from '@nestjs/common';
import { AutocompleteService } from './autocomplete.service';

@Controller('autocomplete')
export class AutocompleteController {
  constructor(private autocompleteService: AutocompleteService) {}

  @Get('/group/:part')
  getGroups(@Param('part') part: string) {
    return this.autocompleteService.findGroupsByName(part);
  }

  @Get('/lesson/:part')
  getLessons(@Param('part') part: string) {
    return this.autocompleteService.findLessonsByName(part);
  }
}
