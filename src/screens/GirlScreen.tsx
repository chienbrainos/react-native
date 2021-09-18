import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Header, Input, Button, Text } from 'react-native-elements'
import styled from 'styled-components'
import { Wrapper, ButtonRow, ButtonCol } from '../components'
import {sendPushNotification, IToken, getToken} from '../services/api'

const Content = styled(View) <{ color?: string }>`
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${c => c.color || 'transparent'};
`;
const GirlScreen: React.FC = () => {
    const [tokenInput, setTokenInput] = React.useState('')
    const [token, setToken] = React.useState<IToken| undefined>()
    return (
        <View>
            <Header
                statusBarProps={{ barStyle: 'light-content' }}
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around',
                }}
                centerComponent={{ text: 'Nhập đánh giá', style: { color: '#fff' } }}
            />
            <Wrapper>
                {token ? (
                    <View>
                        <Text>Mã số của bạn là {token.id} </Text>
                        <Text>Xin vui lòng chọn đánh giá</Text>
                    </View>
                ) : (
                    <View>
                        <Input value={tokenInput} onChangeText={setTokenInput} label="Mã số nhập" placeholder="Vui lòng nhập mã số" />
                        <Button onPress={async () => {
                            const result =  await getToken(tokenInput)
                            setToken(result)
                        }} title="Xác nhận mã số"/>
                    </View>
                )}

                {token && (
                <View style={{ marginTop: 10 }}>
                <Text h4>Bạn nghĩ gì về tôi ???????</Text>
                <ButtonRow>
                    <ButtonCol>
                        <Content color="#e74c3c">
                            <TouchableOpacity onPress={() => sendPushNotification(token.token, 'Bạn đã chọn', 'Đẹp Trai 😍')}>
                                <Text style={{ fontSize: 14, color: '#fff' }}>Đẹp Trai 😍</Text>
                            </TouchableOpacity>
                        </Content>
                    </ButtonCol>
                    <ButtonCol>
                        <Content color="#2980b9">
                            <TouchableOpacity onPress={() => sendPushNotification(token.token, 'Bạn đã chọn', 'Quá Đẹp Trai 😍')}>
                                <Text style={{ fontSize: 14, color: '#fff' }}>Quá Đẹp Trai 😍</Text>
                            </TouchableOpacity>
                        </Content>
                    </ButtonCol>
                    <ButtonCol>
                        <Content color="#2ecc71">
                            <TouchableOpacity onPress={() => sendPushNotification(token.token, 'Bạn đã chọn', 'Cực Kỳ Đẹp Trai 😍')}>
                                <Text style={{ fontSize: 14, color: '#fff' }}>Cực Kỳ Đẹp Trai 😍</Text>
                            </TouchableOpacity>
                        </Content>
                    </ButtonCol>
                    <ButtonCol>
                        <Content color="#f1c40f">
                            <TouchableOpacity onPress={() => sendPushNotification(token.token, 'Bạn đã chọn', 'Đẹp Trai Vãi Đạn 😍')}>
                                <Text style={{ fontSize: 14, color: '#fff' }}>Đẹp Trai Vãi Đạn 😍</Text>
                            </TouchableOpacity>
                        </Content>
                    </ButtonCol>
                </ButtonRow>
            </View>
                )}
            </Wrapper>
        </View>
    )
}
export default GirlScreen