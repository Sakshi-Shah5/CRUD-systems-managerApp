import { Button } from 'antd'
import React from 'react'
import systemsService from '../../services/systemsService'

const DeleteSystemButton = ({sysid, setSystems, systems}) => {

    const deleteSystem = (sysid) => {
        systemsService
            .remove(sysid)
            .then(response => {
                setSystems(systems.filter(system => system.sysid !== sysid))
            })
    }

    return (
        <Button type='primary' onClick={() => deleteSystem(sysid)}>
            Delete
        </Button>
    )
}

export default DeleteSystemButton