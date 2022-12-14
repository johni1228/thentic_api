import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, Contains } from 'class-validator'

export class MintNFT {
  @ApiProperty()
  @IsString()
  key: string;

  @ApiProperty({ description: 'Blockchain network ID' })
  @IsNumber()
  chain_id: Number;

  @ApiProperty({ description: 'A name of contract' })
  @IsString()
  contract: string;

  @ApiProperty({ description: 'A tokenID ' })
  @IsNumber()
  nft_id: Number;

  @ApiProperty({ description: 'Data encoded in NFT ' })
  @IsString()
  nft_data: string;

  @ApiProperty({ description: 'Address of NFT owner ' })
  @IsString()
  to: string;

  @ApiProperty({
    description: 'URL to receive webhook',
    required: false,
    default: ''
  })
  webhook_url: string;

  @ApiProperty({
    description: 'URL to re_direct',
    required: false,
    default: ''
  })
  redirect_url: string;

}

export class TransferNFT {
  @ApiProperty()
  @IsString()
  key: string;

  @ApiProperty({ description: 'Blockchain network ID' })
  @IsNumber()
  chain_id: Number;

  @ApiProperty({ description: 'A name of contract' })
  @IsString()
  contract: string;

  @ApiProperty({ description: 'A tokenID ' })
  @IsNumber()
  nft_id: Number;

  @ApiProperty({ description: 'Address of NFT owner ' })
  @IsString()
  from: string;

  @ApiProperty({ description: 'Address of receive ' })
  @IsString()
  to: string;

  @ApiProperty({
    description: 'URL to receive webhook',
    required: false,
    default: ''
  })
  webhook_url: string;

  @ApiProperty({
    description: 'URL to re_direct',
    required: false,
    default: ''
  })
  redirect_url: string;
}

