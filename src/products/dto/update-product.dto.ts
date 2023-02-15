import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

// Don't update this if all properties are the same as CreateProductDto
export class UpdateProductDto extends PartialType(CreateProductDto) {}
