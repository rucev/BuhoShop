import { reactive, readonly} from 'vue'

interface PostsState {
    email: string
    access_token: string
    refresh_token: string
}
export class PostsStore {
    #state: PostsState

    constructor () {
        this.#state = reactive<PostsState>({
            email: '',
            access_token: '',
            refresh_token: ''
        })
    }

    getState() {
        return readonly(this.#state);
    }

    updateEmail(email: string) {
        this.#state.email = email
    }

    updateAccessToken(access_token: string) {
        this.#state.access_token = access_token
    }

    updateRefreshToken(refresh_token: string) {
        this.#state.refresh_token = refresh_token
    }
}

const store = new PostsStore()

export function usePosts() {
    return store
}