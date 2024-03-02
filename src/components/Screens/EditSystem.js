import React, {useState, useEffect} from 'react'
import {
    useParams, useHistory
} from 'react-router-dom'
import systemsService from '../../services/systemsService'
import { Form, Button, Input} from 'antd';
import { PageHeader } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const EditSystem = () => {
    const history = useHistory()
    // obtaining sysid for specific system
    const sysid = useParams().sysid
    const [newTitle, setNewTitle] = useState('')
    const [newint_type, setNewint_type] = useState('')
    const [newSummary, setNewSummary] = useState('')
    const [newsysid, setNewsysid] = useState('')
    useEffect(() => {
        systemsService
            .getSystem(sysid)
            .then(system => {
                setNewTitle(system.title)
                setNewint_type(system.int_type)
                setNewsysid(system.sysid)
                setNewSummary(system.summary)
            })
    }, [sysid])

    const updateSystem = (values) => {
        const SystemObject = {
            title: values.Title,
            int_type: values.int_type,
            sysid: values.sysid,
            summary: values.Summary
        }
        systemsService
            .update(newsysid, SystemObject)
            .then(returnedSystem => {
            })
    }

    return (
        <div>
            <PageHeader
                onBack={() => history.goBack()}
                title='Editing' 
                subTitle={newTitle}
            />
            <Form
                style={{padding: '2%'}}
                onFinish={(values) => {
                    updateSystem(values)
                    history.goBack()
                }}
                autoComplete='off'
                labelCol={{ span: 3 }}
                // having fields so that form is already filled up by exisiting data
                fields={[
                    {
                        name: ['Title'],
                        value: newTitle
                    },
                    {
                        name: ['int_type'],
                        value: newint_type
                    },
                    {
                        name: ['sysid'],
                        value: newsysid
                    },
                    {
                        name: ['Summary'],
                        value: newSummary
                    }
                ]}
            >
                <Form.Item 
                    name='Title' 
                    label='Title'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <Input placeholder='Input Title' />
                </Form.Item>
                <Form.Item 
                    name='int_type' 
                    label='int_type'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <Input placeholder='Input int_type' />
                </Form.Item>
                <Form.Item 
                    name='sysid' 
                    label='sysid'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true },
                    ]}
                    hasFeedback
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item 
                    name='Summary' 
                    label='Summary'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <TextArea rows={5} placeholder='Input Summary' />
                </Form.Item>
                <Form.Item>
                    <Button block type='primary' htmlType='submit'>
                        Save Changes
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EditSystem