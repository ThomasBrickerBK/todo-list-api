import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: `Message of task`,
    type: String,
    example: 'product example',
    required: true,
  })
  message: string;

  @ApiProperty({
    description: `boolean fulfilled of product`,
    type: Boolean,
    example: false,
    default: false,
    required: false,
  })
  fulfilled: boolean;
}
