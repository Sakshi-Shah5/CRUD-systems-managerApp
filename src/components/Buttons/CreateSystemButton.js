import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const CreateSystemButton = () => {
    return (
        <Link to='/systems/create'>
            <Button type='primary'>
                Add New
            </Button>
        </Link>
    )
}

export default CreateSystemButton