export default [
  {
    path: '/',
    redirect: '/login'
  },
  // {
  //   desc: '华设财富',
  //   name: 'main',
  //   path: '/main',
  //   component: () => import('@/views/Home.vue')
  // }
  {
    desc: '登录页',
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    desc: '直播详情',
    name: 'liveDetail',
    path: '/liveDetail',
    component: () => import('@/views/liveDetail/liveDetail.vue')
  },
  {
    desc: '直播预约',
    name: 'liveAppoint',
    path: '/liveAppoint',
    component: () => import('@/views/liveAppoint/liveAppoint.vue')
  },
  {
    desc: '资讯详情',
    name: 'consultDetail',
    path: '/consultDetail',
    component: () => import('@/views/consultDetail/consultDetail.vue')
  },
  {
    desc: '轮播详情',
    name: 'bannerDetail',
    path: '/bannerDetail',
    component: () => import('@/views/bannerDetail/bannerDetail.vue')
  },
  // {
  //   desc: '实名认证通过',
  //   name: 'CertificatedPage',
  //   path: '/CertificatedPage',
  //   component: () => import('@/views/CertificatedPage/CertificatedPage.vue')
  // },
  {
    desc: '合格投资者认定',
    name: 'QualifiedInvestor',
    path: '/QualifiedInvestor',
    component: () => import('@/views/QualifiedInvestor/QualifiedInvestor.vue')
  },
  {
    desc: '实名认证',
    name: 'toCertify',
    path: '/toCertify',
    component: () => import('@/views/toCertify/toCertify.vue')
  },
  {
    desc: '选择理财师',
    name: 'chooseAdviser',
    path: '/chooseAdviser',
    component: () => import('@/views/chooseAdviser/chooseAdviser.vue')
  },
  {
    desc: '活动详情',
    name: 'activityDetail',
    path: '/activityDetail',
    component: () => import('@/views/activityDetail/activityDetail.vue')
  },
  // {
  //   desc: '风险评测',
  //   name: 'riskTest',
  //   path: '/riskTest',
  //   component: () => import('@/views/riskTest/riskTest.vue')
  // },
  // {
  //   desc: '评测结果',
  //   name: 'testResult',
  //   path: '/testResult',
  //   component: () => import('@/views/testResult/testResult.vue')
  // },
  {
    desc: '华山会俱乐部简介',
    name: 'clubIntro',
    path: '/clubIntro',
    component: () => import('@/views/clubIntro/clubIntro.vue')
  },
  {
    desc: '关于我们',
    name: 'aboutUs',
    path: '/aboutUs',
    component: () => import('@/views/aboutUs/aboutUs.vue')
  },
  {
    desc: '理财师简介',
    name: 'finPlannerIntro',
    path: '/finPlannerIntro',
    component: () => import('@/views/finPlannerIntro/finPlannerIntro.vue')
  },
  {
    desc: '报告详情',
    name: 'reportDetail',
    path: '/reportDetail',
    component: () => import('@/views/reportDetail/reportDetail.vue')
  },
  {
    desc: '理财产品详情(类固收)',
    name: 'solidCharge',
    path: '/solidCharge',
    component: () => import('@/views/finProductDetail/solidCharge.vue')
  },
  {
    desc: '理财产品详情(二级市场)',
    name: 'secondMarket',
    path: '/secondMarket',
    component: () => import('@/views/finProductDetail/secondMarket.vue')
  },
  {
    desc: '理财产品详情(股权)',
    name: 'stockRight',
    path: '/stockRight',
    component: () => import('@/views/finProductDetail/stockRight.vue')
  },
  {
    desc: '理财产品详情(保险)',
    name: 'insurance',
    path: '/insurance',
    component: () => import('@/views/finProductDetail/insurance.vue')
  },
  {
    desc: '类固收记录详情',
    name: 'solidChargeRecord',
    path: '/solidChargeRecord',
    component: () => import('@/views/recordDetail/solidChargeRecord.vue')
  },
  {
    desc: '二级市场记录详情',
    name: 'secondMarketRecord',
    path: '/secondMarketRecord',
    component: () => import('@/views/recordDetail/secondMarketRecord.vue')
  },
  {
    desc: '股权录详情',
    name: 'stockRightRecord',
    path: '/stockRightRecord',
    component: () => import('@/views/recordDetail/stockRightRecord.vue')
  },
  {
    desc: '投资记录详情',
    name: 'insuranceRecord',
    path: '/insuranceRecord',
    component: () => import('@/views/recordDetail/insuranceRecord.vue')
  },
  {
    desc: '其他记录详情',
    name: 'otherRecord',
    path: '/otherRecord',
    component: () => import('@/views/recordDetail/otherRecord.vue')
  },
  {
    desc: '分享落地页',
    name: 'shareIntro',
    path: '/shareIntro',
    component: () => import('@/views/shareIntro/shareIntro.vue')
  },
  {
    desc: '注册下载页',
    name: 'registeredDown',
    path: '/registeredDown',
    component: () => import('@/views/registeredDown/registeredDown.vue')
  },
  // 黑卡特权
  {
    desc: '黑卡特权',
    name: 'blackcardRight',
    path: '/blackcardRight',
    component: () => import('@/views/memberCenter/blackcardRight.vue')
  },
  // {
  //   desc: '黑卡规则',
  //   name: 'blackcardRule',
  //   path: '/blackcardRule',
  //   component: () => import('@/views/memberCenter/blackcardRule.vue')
  // },
  // 邀请好友
  {
    desc: '邀请好友',
    name: 'inviteFriends',
    path: '/inviteFriends',
    component: () => import('@/views/inviteFriends/inviteFriends.vue')
  },
  //认证中心列表页
  {
    desc: '认证中心列表页',
    name: 'certifyCenter',
    path: '/certifyCenter',
    component: () => import('@/views/certifyCenter/certifyCenter.vue')
  },
  // 商户详情
  {
    desc: '商户详情',
    name: 'merchantDetails',
    path: '/merchantDetails',
    component: () => import('@/views/merchantDetails/merchantDetails.vue')
  },
  // 会员体系
  {
    desc: '会员体系',
    name: 'memberSystem',
    path: '/memberSystem',
    component: () => import('@/views/memberSystem/memberSystem.vue')
  },
  {
    desc: '其他服务详情页',
    name: 'OtherServiceDetail',
    path: '/OtherServiceDetail',
    component: () => import('@/views/OtherServiceDetail/OtherServiceDetail.vue')
  },
  {
    desc: '消息详情和公告详情',
    name: 'notifyDetail',
    path: '/notifyDetail',
    component: () => import('@/views/notifyDetail/notifyDetail.vue')
  },
]
