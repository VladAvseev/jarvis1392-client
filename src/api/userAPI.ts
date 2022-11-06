import api from './api';
import {AxiosResponse} from 'axios';

class UserAPI {
    async changeUsername(_id: string, newName: string): Promise<AxiosResponse<string>> {
        return api.post<string>('/user/edit/username', {_id, newName});
    }
}

export const userApi = new UserAPI();