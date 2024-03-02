import React from 'react'
import systemsService from '../../services/systemsService';
import {useHistory} from 'react-router-dom'
import { Form, Button, Input} from 'antd';
import { PageHeader } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const CreateNewSystem = ({systems, setSystems}) => {
    const history = useHistory()
    const systemssysid = systems.map(system => system.sysid)
    const addSystem = (values) => {
        const SystemObject = {
            title: values.Title,
            int_type: values.int_type,
            sysid: values.sysid,
            summary: values.Summary
        }
        systemsService
            .create(SystemObject)
            .then(newSystem => {
            })
    }
    return (
        <div>
            <PageHeader
                onBack={() => history.goBack()}
                title='Creating New System' 
            />
            <Form
                style={{padding: '2%'}}
                onFinish={(values) => {
                    addSystem(values)
                    history.goBack()
                }}
                autoComplete='off'
                labelCol={{ span: 3 }}
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
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (value.match(/^[0-9._-]+$/) === null){
                                    return Promise.reject(new Error('sysid only consists of numbers'))
                                }
                                if (systemssysid.includes(value)) {
                                    return Promise.reject(new Error('sysid already exists'))
                                } 
                                if (value.replaceAll('-', '').length !== 6) {
                                    return Promise.reject(new Error('sysid needs to have 6 digits'))
                                }
                                return Promise.resolve()
                            }
                        })
                    ]}
                    hasFeedback
                >
                    <Input placeholder='Input sysid' />
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
                <Form.Item >
                    <Button block type='primary' htmlType='submit'>
                        Add New
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CreateNewSystem