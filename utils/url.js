/**
 * 存放所有的URL地址
 * 在调用页面通过以下方式使用
 * import myurl from "../../utils/url"
 * 使用时：myurl.变量名
 */
var RPUrl = "http://jun25th.cn/Company/project/Api/";
export default{
  //获得红包的列表
  getRpList: RPUrl +"User/get/",
  //用户发出红包
  putRp: RPUrl + "User/put/",
  //获取广告列表
  getAdList: RPUrl + "Advert/list/",
  //获取广告红包列表
  getAdRpList: RPUrl + "Advert/packetlist/",
  //获取单个广告红包
  getAdRp: RPUrl + "Packet/adpacket/",
  //获取红包成功
  obtain: RPUrl + "Packet/obtain/",
  //红包排行榜
  rankinglist: RPUrl + "Packet/rankinglist/",
  //获取红包手续费
  broke: RPUrl + "Packet/broke/",
  //支付成功后用户发出红包数据
  addpacket: RPUrl + "Packet/addpacket/",
  //账号余额页面
  remain: RPUrl + "User/remain/",
  //账号提取余额成功
  extra: RPUrl + "User/extra/",
}