import React from 'react';
import UserInfoList from "./UserInfoList";
import UserInfoItem from "./UserInfoItem";
import {useAppSelector} from "../../../hooks/useAppSelector";

const UserInfo = () => {
    const {uuid} = useAppSelector(state => state.user)

    return (
        <UserInfoList>
           <UserInfoItem>
               Имя (статика): 123
           </UserInfoItem>
            <UserInfoItem>
               Группа (статика): КС-44
            </UserInfoItem>
            <UserInfoItem>
                Курс (статика): 4
            </UserInfoItem>
            <UserInfoItem>
                <b>
                    UUID (ПОЗЖЕ УДАЛИТЬ): {uuid}
                </b>
            </UserInfoItem>
        </UserInfoList>
    );
};

export default UserInfo;