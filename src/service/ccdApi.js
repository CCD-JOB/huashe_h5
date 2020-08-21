import { tools } from '@/utils/tools'
import url from './url'
//获取行业详情
export const inforDetails = data => {
  // 接口公参添加
  const cfg = {
    method: 'get',
    url: url.inforDetails,
    data
  }
  return tools.ccdAjax(cfg)
}