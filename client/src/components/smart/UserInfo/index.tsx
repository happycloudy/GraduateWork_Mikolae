import React from 'react';
import UserInfoList from "./UserInfoList";
import UserInfoItem from "./UserInfoItem";

const UserInfo = () => {
    return (
        <UserInfoList>
           <UserInfoItem>
               Имя: 123 (статика)
           </UserInfoItem>
            <UserInfoItem>
               Группа: КС-44 (статика)
            </UserInfoItem>
            <UserInfoItem>
                Курс: 4 (статика)
            </UserInfoItem>
            <UserInfoItem>
                <b>
                    UUID: 123123 (ПОЗЖЕ УДАЛИТЬ)
                </b>
            </UserInfoItem>
        </UserInfoList>
    );
};

export default UserInfo;