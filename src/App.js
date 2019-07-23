import React from 'react'
import { Layout, Menu } from 'antd'
import Potenza from './Potenza'
import Cardio from './Cardio'
const { Header, Footer, Content } = Layout

export default class App extends React.Component {
    defaultMenuItem = '1'
    state = { selectedItem: this.defaultMenuItem }

    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <Menu
                        theme='dark'
                        mode='horizontal'
                        defaultSelectedKeys={[this.defaultMenuItem]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item
                            key='1'
                            onClick={this.onItemClick.bind(this, '1')}
                        >
                            Potenza
                        </Menu.Item>
                        <Menu.Item
                            key='2'
                            onClick={this.onItemClick.bind(this, '2')}
                        >
                            Cardio
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <div
                        style={{
                            background: '#fff',
                            padding: 24,
                            minHeight: 380,
                        }}
                    >
                        {this.state.selectedItem !== this.defaultMenuItem ? (
                            <Cardio />
                        ) : (
                            <Potenza />
                        )}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Fisio Marcy</Footer>
            </Layout>
        )
    }

    onItemClick(i) {
        console.log(i)
        this.setState({ ...this.state, selectedItem: i })
    }
}
