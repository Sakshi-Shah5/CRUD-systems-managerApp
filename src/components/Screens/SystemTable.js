import { Input, Table, Space } from 'antd'
import React, { useEffect } from 'react'
import EditSystemButton from '../Buttons/EditSystemButton'
import CreateSystemButton from '../Buttons/CreateSystemButton'
import DeleteSystemButton from '../Buttons/DeleteSystemButton'
import ViewMoreButton from '../Buttons/ViewMoreButton'
import { SearchOutlined } from '@ant-design/icons'
import systemsService from '../../services/systemsService'

const SystemTable = ({systems, setSystems}) => {
    // retrieving data from systems.json
    useEffect(() => {
        systemsService
            .getAll()
            .then(systems => {
                setSystems(systems)
            })
    }, [setSystems])
    
    // header for table + able to filter data using filterDropdown
    const columns = [ 
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm}) => {
                return (
                    <>
                        <Input 
                            autoFocus 
                            placeholder = 'Type text here'
                            value = {selectedKeys[0]}
                            onChange = {(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : [])
                                confirm({ closeDropdown: false })
                            }}
                            onPressEnter={() => {
                                confirm()
                            }}
                            onBlur={() => {
                                confirm();
                            }}
                        ></Input>
                    </>
                )
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.title.toLowerCase().includes(value.toLowerCase())
            }
        },
        {
            title: 'int_type',
            dataIndex: 'int_type',
            key: 'int_type',
            responsive: ['sm'],
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm}) => {
                return (
                    <>
                        <Input 
                            autoFocus 
                            placeholder = 'Type text here'
                            value = {selectedKeys[0]}
                            onChange = {(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : [])
                                confirm({ closeDropdown: false })
                            }}
                            onPressEnter={() => {
                                confirm()
                            }}
                            onBlur={() => {
                                confirm();
                            }}
                        ></Input>
                    </>
                )
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.int_type.toLowerCase().includes(value.toLowerCase())
            }
        },
        {
            title: 'sysid',
            dataIndex: 'sysid',
            key: 'sysid',
            responsive: ['sm'],
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm}) => {
                return (
                    <>
                        <Input 
                            autoFocus 
                            placeholder = 'Type text here'
                            value = {selectedKeys[0]}
                            onChange = {(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : [])
                                confirm({ closeDropdown: false })
                            }}
                            onPressEnter={() => {
                                confirm()
                            }}
                            onBlur={() => {
                                confirm();
                            }}
                        ></Input>
                    </>
                )
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.sysid.toLowerCase().includes(value.toLowerCase())
            }
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record, index) => (
                <Space>
                    {<ViewMoreButton system={record}/>}
                    {<DeleteSystemButton systems={systems} setSystems={setSystems} sysid={record.sysid} />}
                    {<EditSystemButton system={record}/>}
                </Space> 
            )
        }
    ]

    // data to fill up the rows of the table
    const data = systems.map(system => {
        return (
            {
                title: system.title,
                int_type: system.int_type,
                sysid: system.sysid,
                key: system.sysid
            }
        )
    })

    return (
        <div>
            <div style={{display: 'flex'}}>
                <h2 style={{paddingLeft: '1.5%', paddingTop: '1%'}}>
                    Systems Table
                </h2>
                <div style={{ marginLeft: 'auto', paddingRight: '1.5%', paddingTop: '1%' }}>
                    {<CreateSystemButton />}
                </div>
            </div>
            <Table 
                style={{padding: '1%'}}
                dataSource={data} 
                columns={columns} 
            />
        </div>
    )
}

export default SystemTable