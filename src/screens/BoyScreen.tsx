import * as React from 'react'
import { View } from 'react-native'
import {Header, Text, Button} from 'react-native-elements'
import {Wrapper,} from '../components'
import * as Notifications from 'expo-notifications';
import {submitToken, IToken} from '../services/api'

async function getNotificationToken() {
    const {status} = await Notifications.getPermissionsAsync()
    if(status != 'granted'){
        const { status } = await Notifications.requestPermissionsAsync()
        if(status != 'granted'){
            alert('failed....')
            return
        }
    }
    const tokenData = await Notifications.getExpoPushTokenAsync()
    const token = tokenData.data
    console.log('token', token)
    return token
}

const BoyScreen : React.FC = () => {
    const [token, setToken] = React.useState<IToken| undefined>()
    return (
        <View>
            <Header
                statusBarProps={{ barStyle: 'light-content' }}
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around',
                }}
                centerComponent={{ text: 'Nhập mã số', style: { color: '#fff' } }}
                />
                <Wrapper>
                    <Text style={{ fontSize: 18, marginBottom: 10}}>
                        {token ? `Mã số của bạn là ${token.id}` : 'Bạn chưa có mã số, bấm vào đây để lấy mã'}
                    </Text>
                    <Button onPress={async () => {
                        const token = await getNotificationToken()
                        if(token){
                            const result = await submitToken(token)
                            setToken(result)
                        }
                    }} title="Vui lòng bấm vào đây"/>
                </Wrapper>
        </View>
    )
}
export default BoyScreen