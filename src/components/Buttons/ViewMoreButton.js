import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ViewMoreButton = ({system}) => {
    return (
        <Link to={`/systems/${system.sysid}`}>
            <Button type='primary'>
                View More
            </Button>
        </Link>
    )
}

export default ViewMoreButton