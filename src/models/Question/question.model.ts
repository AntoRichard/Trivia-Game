
import {Category} from '../Category/category.model';

import {serializable, alias, object, primitive} from 'serializr';

export class Question { 

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('answer', primitive()))
	answer?: string;

	@serializable(alias('question', primitive()))
	question?: string;

	@serializable(alias('value', primitive()))
	value?: number;

	@serializable(alias('airdate', primitive()))
	airdate?: string;

	@serializable(alias('created_at', primitive()))
	createdAt?: string;

	@serializable(alias('updated_at', primitive()))
	updatedAt?: string;

	@serializable(alias('category_id', primitive()))
	categoryId?: number;

	@serializable(alias('game_id', primitive()))
	gameId?: number;

	@serializable(alias('invalid_count', primitive()))
	invalidCount?: string;

	@serializable(alias('category', object(Category)))
	category?: Category;

}