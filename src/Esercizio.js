import React from 'react'
import { Card } from 'antd'

export default class Esercizio extends React.Component {
    render() {
        return (
            <Card
                title={this.props.title}
                style={{
                    marginBottom: '1em',
                }}
                headStyle={{ backgroundColor: '#b54915', color: '#f5f5f5' }}
            >
                {this.props.children}
                <div style={{ textAlign: 'center' }}>
                    <iframe
                        title={this.props.title}
                        width='100%'
                        height='315'
                        src={this.props.youtubeUrl}
                        frameborder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    />
                </div>
            </Card>
        )
    }
}
