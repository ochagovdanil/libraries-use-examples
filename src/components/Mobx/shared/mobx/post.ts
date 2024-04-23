import { PostItem } from '@components/Mobx/entities/PostItem';
import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getPosts } from '../api/getPosts';

class Post {
	posts?: IPromiseBasedObservable<PostItem[]>;
	// isLoading: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	getPostsAction() {
		this.posts = fromPromise(getPosts());
	}
}

export default new Post();
