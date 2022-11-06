import api from './api';
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {IUser} from "../models/user/IUser";

class AuthAPI {
    async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>('/login', {email, password});
    }

    async registration(email: string, password: string, username: string): Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>('/registration', {email, password, username});
    }

    async logout(): Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>('/logout');
    }

    async refresh(): Promise<AxiosResponse<AuthResponse>> {
        return api.get<AuthResponse>('/refresh');
    }

    async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return api.get<IUser[]>('/users');
    }
}

export const authAPI = new AuthAPI();