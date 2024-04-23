import counter from '../shared/mobx/counter';
import post from '../shared/mobx/post';
import todo from '../shared/mobx/todo';

class RootStore {
	postStore = post;
	counterStore = counter;
	todoStore = todo;
}

export default RootStore;
