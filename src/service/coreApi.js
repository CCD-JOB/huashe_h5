import { tools } from '@/utils/tools'
import url from './url'

// 获取token
export const getToken = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.getToken,
    data
  }
  return tools.ajax(cfg)
}
// 获取图片验证码(返回图片) （无需登录）
export const getImageCode = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getImageCode,
    responseType: 'arraybuffer',
    data
  }
  return tools.ajax(cfg)
}
// 获取短信验证码 （无需登录）
export const getSmsCode = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.getSmsCode,
    data
  }
  return tools.ajax(cfg)
}
// 获取openId接口(无需登录)
export const getWechatOpenId = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.getWechatOpenId,
    data
  }
  return tools.ajax(cfg)
}
// 获取用户信息(无需登录)
export const getWechatInfo = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getWechatInfo,
    data
  }
  return tools.ajax(cfg)
}
// 用户登录接口 （无需登录）
export const login = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.login,
    data
  }
  return tools.ajax(cfg)
}
// 刷新token接口,token
export const refreshToken = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.refreshToken,
    data
  }
  return tools.ajax(cfg)
}
// 首页公告接口，默认按照时间倒序排序
export const getNoticeListByPage = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getNoticeListByPage,
    data
  }
  return tools.ajax(cfg)
}
// 首页公告接口，默认按照时间倒序排序
export const getNoticeInfo = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getNoticeInfo,
    data
  }
  return tools.ajax(cfg)
}
// 首页banner接口 （无需登录）
export const getBannerListByPage = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getBannerListByPage,
    data
  }
  return tools.ajax(cfg)
}
// 视频列表接口
export const getVedioListByPage = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getVedioListByPage,
    data
  }
  return tools.ajax(cfg)
}
// 华设观点接口（待补充,目前没有华设观点接口） （无需登录）
export const getHSViewPointByPage = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getHSViewPointByPage,
    data
  }
  return tools.ajax(cfg)
}
// 焦点咨讯列表接口（待补充） （无需登录）
export const getConsultationByPage = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getConsultationByPage,
    data
  }
  return tools.ajax(cfg)
}
// 焦点咨讯详情接口 （无需登录）
export const getConsultationInfo = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getConsultationInfo,
    data
  }
  return tools.ajax(cfg)
}
//轮播详情
export const getBannerDetail = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getBannerDetail,
    data
  }
  return tools.ajax(cfg)
}

// 产品总览图
export const getProductOverView = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getProductOverView,
    data
  }
  return tools.ajax(cfg)
}
// 产品列表接口（等待最终设计图）
export const getProductListByPage = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.getProductListByPage,
    data
  }
  return tools.ajax(cfg)
}
// 产品详情接口(等待详情页具体设计)
export const getProductInfo = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.getProductInfo,
    data
  }
  return tools.ajax(cfg)
}
// 二级市场获取收益率
export const getEarningRate = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getEarningRate,
    data
  }
  return tools.ajax(cfg)
}
// 精彩活动列表
export const getActivityListByPage = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getActivityListByPage,
    data
  }
  return tools.ajax(cfg)
}
// 精彩活动详情页
export const getActivityInfo = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.getActivityInfo,
    data
  }
  return tools.ajax(cfg)
}
// 活动/视频直播 预约
export const appointment = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.appointment,
    data
  }
  return tools.ajax(cfg)
}
// 活动/视频直播 预约列表
export const getAppointmentListByPage = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getAppointmentListByPage,
    data
  }
  return tools.ajax(cfg)
}
// 获取我的基本信息（通过获取请求头加密的用户信息）
export const aboutMe = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.aboutMe,
    data
  }
  return tools.ajax(cfg)
}
// 获取我的基本信息（通过获取请求头加密的用户信息）
export const queryAssetsByCode = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.queryAssetsByCode,
    data
  }
  return tools.ajax(cfg)
}
// 根据时间查询付息计划
export const queryInvestPaymentPlan = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.queryInvestPaymentPlan,
    data
  }
  return tools.ajax(cfg)
}
// 根据时间查询付息计划
export const queryInvestRecordByPage = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.queryInvestRecordByPage,
    data
  }
  return tools.ajax(cfg)
}
// 根据时间查询付息计划
export const queryInvestmentInfo = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.queryInvestmentInfo,
    data
  }
  return tools.ajax(cfg)
}
// 实名认证接口
export const certificationVerify = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.certificationVerify,
    data
  }
  return tools.ajax(cfg)
}
// 绑卡列表
export const getBindingCardListByPage = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getBindingCardListByPage,
    data
  }
  return tools.ajax(cfg)
}
// 合格投资者认定(需前端勾选了3个选项框，才可以调用)
export const QFIICertification = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.QFIICertification,
    data
  }
  return tools.ajax(cfg)
}
// 获取风险评测问卷题目
export const getQuestionnaire = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getQuestionnaire,
    data
  }
  return tools.ajax(cfg)
}
// 提交风险评测问卷
export const getQuestionnaireResult = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.getQuestionnaireResult,
    data
  }
  return tools.ajax(cfg)
}
// 选择理财顾问
export const chooseConsultant = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.chooseConsultant,
    data
  }
  return tools.ajax(cfg)
}
// 账户注销
export const accountWithDraw = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.accountWithDraw,
    data
  }
  return tools.ajax(cfg)
}

export const getRedeemList = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getRedeemList,
    data
  }
  return tools.ajax(cfg)
}

export const getRepaymentPlan = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.getRepaymentPlan,
    data
  }
  return tools.ajax(cfg)
}
// faceId获取token
export const getH5BizToken = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.getH5BizToken,
    data
  }
  return tools.ajax(cfg)
}
// faceidH5获取结果
export const getH5FaceIdResult = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.getH5FaceIdResult,
    data
  }
  return tools.ajax(cfg)
}
// 投后报告
export const getAttachmentList = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.getAttachmentList,
    data
  }
  return tools.ajax(cfg)
}
// 黑卡商户
export const getMerchantList = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getMerchantList,
    // headers: {
    //   Referer: 'http://weixin.qq.com/'
    // },
    data
  }
  return tools.ajax(cfg)
}

export const getAttachmentListByProductId = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.getAttachmentListByProductId,
    data
  }
  return tools.ajax(cfg)
}
//黑卡预约
export const merchantAppointment = data => {
  // 接口公参添加
  const cfg = {
    method: 'post',
    url: url.merchantAppointment,
    data
  }
  return tools.ajax(cfg)
}
//其他服务详情页
export const getOtherServiceInfo = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.getOtherServiceInfo,
    data
  }
  return tools.ajax(cfg)
}


