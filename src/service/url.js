export default {
  // 获取token
  getToken: '/authentication/getToken',
  // 获取图片验证码(返回图片) （无需登录）
  getImageCode: '/authentication/getImageCode', // 参数id
  // 获取短信验证码 （无需登录）
  getSmsCode: '/authentication/getSmsCode', // 参数phoneNumber,imageCode,id
  // 获取openId接口(无需登录)
  getWechatOpenId: '/authentication/getWechatOpenId', // 参数code
  // 获取用户信息(无需登录)
  getWechatInfo: '/authentication/getWechatInfo', // 参数openId
  // 用户登录接口 （无需登录）
  login: '/authentication/login', // 参数phoneNumber,code,registerWay,wechatOpenId,appleId
  // 刷新token接口,token）
  refreshToken: '/authentication/refreshToken', // 参数refreshToken
  // 首页公告接口，默认按照时间倒序排序
  getNoticeListByPage: '/index/getNoticeListByPage', // 参数pageNum pageSize
  // 首页公告详情页
  getNoticeInfo: '/index/getNoticeInfo', // 参数pageNum pageSize
  // 首页banner接口 （无需登录）
  getBannerListByPage: '/index/getBannerListByPage', // 参数pageNum pageSize

  // 视频列表接口
  getVedioListByPage: '/index/getVedioListByPage', // 参数pageNum pageSize
  // 华设观点接口（待补充,目前没有华设观点接口） （无需登录）
  getHSViewPointByPage: '/index/getHSViewPointByPage', // 参数pageNum pageSize
  // 焦点咨讯列表接口（待补充） （无需登录）
  getConsultationByPage: '/index/getConsultationByPage', // 参数pageNum pageSize
  // 焦点咨讯详情接口 （无需登录）
  getConsultationInfo: '/index/getConsultationInfo', // 参数pageNum pageSize
  // 产品总览图
  getProductOverView: '/product/getProductOverView', // 参数pageNum pageSize
  // 产品列表接口（等待最终设计图）
  getProductListByPage: '/product/getProductListByPage', // 参数pageNum pageSize
  // 产品详情接口(等待详情页具体设计)
  getProductInfo: '/product/getProductInfo', // 参数pageNum pageSize
  // 二级市场获取收益率
  getEarningRate: '/product/getEarningRate', // 参数pageNum pageSize
  // 精彩活动列表
  getActivityListByPage: '/activity/getActivityListByPage', // 参数pageNum pageSize
  // 精彩活动详情页
  getActivityInfo: '/activity/getActivityInfo', // 参数pageNum pageSize
  // 活动/视频直播 预约
  appointment: '/activity/appointment', // 参数pageNum pageSize
  // 活动/视频直播 预约列表
  getAppointmentListByPage: '/auth/getAppointmentListByPage', // 参数pageNum pageSize
  // 获取我的基本信息（通过获取请求头加密的用户信息）
  aboutMe: '/auth/aboutMe', // 参数pageNum pageSize
  // 通过产品类型获取总资产
  queryAssetsByCode: '/auth/queryAssetsByCode', // 参数pageNum pageSize
  // 根据时间查询付息计划
  queryInvestPaymentPlan: '/auth/queryInvestPaymentPlan', // 参数pageNum pageSize
  // 根据产品类别查询投资记录(需确认投资列表页详情数据)
  queryInvestRecordByPage: '/auth/queryInvestRecordByPage', // 参数pageNum pageSize
  // 查询投资记录详情页
  queryInvestmentInfo: '/auth/queryInvestmentInfo', // 参数pageNum pageSize
  // 实名认证接口
  certificationVerify: '/auth/certificationVerify', // 参数pageNum pageSize
  // 绑卡列表
  getBindingCardListByPage: '/auth/getBindingCardListByPage', // 参数pageNum pageSize

  // 合格投资者认定(需前端勾选了3个选项框，才可以调用)
  QFIICertification: '/auth/QFIICertification', // 参数pageNum pageSize
  // 获取风险评测问卷题目
  getQuestionnaire: '/auth/getQuestionnaire', // 参数pageNum pageSize
  // 提交风险评测问卷
  getQuestionnaireResult: '/auth/getQuestionnaireResult', // 参数pageNum pageSize
  // 选择理财顾问
  chooseConsultant: '/auth/chooseConsultant', // 参数pageNum pageSize
  // 账户注销
  accountWithDraw: '/auth/accountWithDraw' // 参数pageNum pageSize

};
