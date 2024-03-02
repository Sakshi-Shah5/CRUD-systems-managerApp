import React, { useEffect } from 'react'
import systemsService from '../../services/systemsService'
import {useParams, useHistory} from 'react-router-dom'
import DescriptionsItem from 'antd/lib/descriptions/Item';
import { Descriptions } from 'antd';
import { PageHeader } from 'antd';

const System = ({systems, setSystems}) => {
    const history = useHistory()
    useEffect(() => {
        systemsService
            .getAll()
            .then(systems => {
                setSystems(systems)
            })
    }, [setSystems])
    // obtaining sysid to get specific system
    const sysid = useParams().sysid
    const system = systems.find(system => system.sysid === sysid)
    // conditional statement to prevent error since system is undefined before useEffect fires
    if (system !== undefined) {
        return (
            <div>
                <PageHeader 
                    onBack={() => history.goBack()}
                    title='System Information' 
                />
                <Descriptions 
                    style={{padding: '2%'}}
                    title={system.title}
                    bordered
                    column={{ sm: 1, xs: 1 }}
                >
                    <DescriptionsItem label='Title'>
                        {system.title}
                    </DescriptionsItem>
                    <DescriptionsItem label='int_type'>
                        {system.int_type}
                    </DescriptionsItem>
                    <DescriptionsItem label='sysid'>
                        {system.sysid}
                    </DescriptionsItem>
                    <DescriptionsItem label='Summary'>
                        {system.summary}
                    </DescriptionsItem>
                </Descriptions>

            </div>
        )
    }
    return null;
}

export default System