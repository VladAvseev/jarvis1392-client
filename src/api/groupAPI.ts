import api from './api';
import {AxiosResponse} from 'axios';
import {IGroup} from "../models/group/IGroup";

class GroupAPI {
    async getGroups(): Promise<AxiosResponse<IGroup[]>> {
        return api.get<IGroup[]>('/group/groups');
    }

    async createGroup(name: string, owner: string): Promise<AxiosResponse<IGroup>> {
        return api.post<IGroup>('/group/create', {name, owner});
    }

    async getUserGroup(userId: string): Promise<AxiosResponse<IGroup[]>> {
        return api.get<IGroup[]>(`/group/userGroups?userId=${userId}`);
    }
}

export const groupAPI = new GroupAPI();