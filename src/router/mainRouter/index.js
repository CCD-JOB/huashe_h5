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
    desc: '咨询详情',
    name: 'consultDetail',
    path: '/consultDetail',
    component: () => import('@/views/consultDetail/consultDetail.vue')
  },
  {
    desc: '实名认证通过',
    name: 'CertificatedPage',
    path: '/CertificatedPage',
    component: () => import('@/views/CertificatedPage/CertificatedPage.vue')
  },
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
    desc: '选择理财师',
    name: 'activityDetail',
    path: '/activityDetail',
    component: () => import('@/views/activityDetail/activityDetail.vue')
  },
  {
    desc: '风险评测',
    name: 'riskTest',
    path: '/riskTest',
    component: () => import('@/views/riskTest/riskTest.vue')
  },
  {
    desc: '评测结果',
    name: 'testResult',
    path: '/testResult',
    component: () => import('@/views/testResult/testResult.vue')
  },
  {
    desc: '华山会俱乐部简介',
    name: 'clubIntro',
    path: '/clubIntro',
    component: () => import('@/views/clubIntro/clubIntro.vue')
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
    name: 'finProductDetail',
    path: '/finProductDetail',
    component: () => import('@/views/finProductDetail/finProductDetail.vue')
  }

];
