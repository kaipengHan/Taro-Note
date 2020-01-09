import Taro, { Component } from '@tarojs/taro';
import { View, Navigator, Button } from '@tarojs/components';
export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<View>
				<View>taro API</View>
				<Navigator target='self' open-type='navigate' url='/pages/file/file' >文件</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/addPhoneContact/addPhoneContact' >添加联系人、获取网络</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/clipboard/clipboard' >剪贴板</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/compass/compass' >罗盘</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/deviceDirection/deviceDirection' >设备方向</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/keepScreenOn/keepScreenOn' >屏幕亮度</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/scanCode/scanCode' >微信扫码</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/systemInfo/systemInfo' >系统信息</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/userCaptureScreen/userCaptureScreen' >截屏、振动、打电话</Navigator>
        		<Navigator target='self' open-type='navigate' url='/pages/animation/animation' >动画</Navigator>
        		<Navigator target='self' open-type='navigate' url='/pages/interactive/interactive' >交互</Navigator>
        		<Navigator target='self' open-type='navigate' url='/pages/nav/nav1' >导航</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/refresh/refresh1' >刷新操作</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/controlKey/controlKey' >刷新操作</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/record/record' >录音</Navigator>
        <Navigator target='self' open-type='navigate' url='/pages/playMusic/playMusic' >背景音频控制</Navigator>
        <Navigator target='self' open-type='navigate' url='/pages/font/font' >加载新字体</Navigator>
        <Navigator target='self' open-type='navigate' url='/pages/cameraPerson/cameraPerson' >人形拍照</Navigator>
        <Navigator target='self' open-type='navigate' url='/pages/scrollTop/scrollTop1' >滚动API回到最上</Navigator>

				<View>taro 组件库</View>
				<Navigator target='self' open-type='navigate' url='/pages/basicControl/basicControl' >图标、进度条、富文本</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/cameraControl/cameraControl' >拍照</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/imageControl/imageControl' >图片</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/videoControl/videoControl' >视频</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/formComp/formComp' >表单</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/mapControl/mapControl' >地图</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/openDataControl/openDataControl' >开放能力-获取用户信息</Navigator>
				<Navigator target='self' open-type='navigate' url='/pages/refControl/refControl' >使用ref</Navigator>
			</View>
		)
	}
}
