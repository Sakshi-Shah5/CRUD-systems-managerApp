import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'


const EditSystemButton = ({system}) => {
    return (
        <Link to={`/systems/edit/${system.sysid}`}>
            <Button type='primary'>
                Edit
            </Button>
        </Link>
    )
}

export default EditSystemButton