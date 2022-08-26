import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from 'class-validator'

export class ContractDto {
  @ApiProperty()
  @IsString()
  key: string;

  @ApiProperty({ description: 'Blockchain network ID' })
  @IsNumber()
  chain_id: Number;

  @ApiProperty({ description: 'A name of contract' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'A symbol of contract ' })
  @IsString()
  short_name: string;

  @ApiProperty({
    description: 'URL to receive webhook',
    required: false,
    default: ''
  })
  webhook_url: Number;

  @ApiProperty({
    description: 'URL to re_direct',
    required: false,
    default: ''
  })
  redirect_url: string;

}

export class ShowContractDto {
  @ApiProperty()
  @IsString()
  key: string;

  @ApiProperty({ description: 'Blockchain network ID' })
  @IsNumber()
  chain_id: Number;

}