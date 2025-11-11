import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function recreateAdminUser() {
  const adminUsername = ''
  const adminPassword = ''

  // 1. 先删除已存在的管理员用户
  try {
    await prisma.user.delete({
      where: { username: 'admin' },
    })
    console.log('已删除旧的管理员用户')
  }
  catch {
    console.log('没有找到旧的管理员用户，继续创建新用户')
  }

  // 2. 创建新的管理员用户
  const hashedPassword = await bcrypt.hash(adminPassword, 12) // 修改为新的安全密码

  await prisma.user.create({
    data: {
      username: adminUsername,
      password: hashedPassword,
      role: 'admin',
    },
  })

  console.log('新的管理员用户创建成功')
  console.log(`用户名: ${adminUsername}`)
  console.log(`密码: ${adminPassword}`) // 提醒用户修改密码
}

recreateAdminUser()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
