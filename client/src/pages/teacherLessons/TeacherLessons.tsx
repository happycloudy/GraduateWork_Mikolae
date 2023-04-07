import React from 'react';
import {Sidebar} from "../../modules/Sidebar";
import {useUserStore} from "../../stores/user/user.store";

const TeacherLessons = () => {
    const isAuth = useUserStore(state => state.isAuth)


    return (
        <>
            {isAuth && <Sidebar/>}
        </>
    );
};

export default TeacherLessons;