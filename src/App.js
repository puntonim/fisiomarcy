import React from 'react'
import { Layout, Button, Menu, Breadcrumb } from 'antd'
import { Typography } from 'antd'

const { Header, Footer, Content } = Layout
const { Title, Paragraph, Text } = Typography

function App() {
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Menu
                    theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key='1'>Potenza</Menu.Item>
                    <Menu.Item key='2'>Cardio</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div
                    style={{ background: '#fff', padding: 24, minHeight: 380 }}
                >
                    <Typography>
                        <Title>Hello World!</Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum non nisi a lorem efficitur egestas.
                            Morbi dolor massa, imperdiet ut purus et, ultrices
                            egestas quam. Mauris velit purus, venenatis a sem
                            vitae, mattis maximus libero. Maecenas cursus erat
                            quis turpis venenatis, sit amet varius mi ultricies.
                            Etiam sit amet volutpat sem, sed pellentesque
                            lectus. Morbi quis lacus vitae libero dictum mattis.
                            Maecenas placerat faucibus eros ac accumsan. Morbi
                            non risus et sapien porttitor facilisis id auctor
                            sapien. Aenean sed lacus ligula. Quisque tempus
                            tempus velit, non tincidunt turpis congue ac.
                            Quisque condimentum porta eleifend. Vivamus a velit
                            leo. Quisque eleifend quis mauris non ullamcorper.
                        </Paragraph>
                        <Button type='primary'>Next</Button>
                    </Typography>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Fisio Marcy</Footer>
        </Layout>
    )
}

export default App
