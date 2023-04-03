import React from 'react';
import UserInfoList from "./UserInfoList";
import UserInfoItem from "./UserInfoItem";

const UserInfo = () => {
    const uuid = 123123

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