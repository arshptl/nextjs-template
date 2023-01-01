import React from 'react'
import { Spin } from 'antd'

const Loader = () => {
    return (
        <div style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Spin size="large" tip="Loading" />
        </div>
    )
}

export default Loader