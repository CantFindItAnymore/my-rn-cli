/*
 * @Author: ranjun
 * @Date: 2020-10-12 15:37:25
 * @Last Modified by: ranjun
 * @Last Modified time: 2020-10-12 16:30:07
 */

import { create } from 'dva-core'
import models from '../models'
import createLoading from 'dva-loading'

//  1.创建实例
const app = create()

//  2.加载model对象
models.map(model => {
  app.model(model)
})

// 加上loaing
app.use(createLoading())
//  3.启动dva
app.start()
//  3.导出dva数据
export default app._store
