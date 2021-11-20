
import {serializable, alias, primitive} from 'serializr';

export class Category { 

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('title', primitive()))
	title?: string;

	@serializable(alias('created_at', primitive()))
	createdAt?: string;

	@serializable(alias('updated_at', primitive()))
	updatedAt?: string;

	@serializable(alias('clues_count', primitive()))
	cluesCount?: number;

}