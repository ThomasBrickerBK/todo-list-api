import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: `Massage of task`,
    type: String,
    example: 'product example',
    required: true,
  })
  massage: string;

  @ApiProperty({
    description: `boolean fulfilled of product`,
    type: Boolean,
    example: false,
    default: false,
    required: false,
  })
  fulfilled: boolean;
}
