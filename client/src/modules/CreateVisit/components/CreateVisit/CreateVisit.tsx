import React from 'react';
import {Row} from "antd";
import {CreateVisitForm} from "../CreateVisitForm/CreateVisitForm";

export const CreateVisit = () => {
    return (
        <Row justify={'center'} align={'middle'} style={{width: '100%'}}>
            <CreateVisitForm/>
        </Row>
    );
};