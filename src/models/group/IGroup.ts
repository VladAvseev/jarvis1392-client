import {IUser} from "../user/IUser";

export interface IGroup {
    _id: string;
    name: string;
    owner: string;
    members: IUser[];
}