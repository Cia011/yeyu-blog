import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function createAdminUser() {
  const hashedPassword = await bcrypt.hash('admin123', 12) // 请修改为安全密码

  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
      role: 'admin',
    },
  })

  console.log('管理员用户创建成功')
}

createAdminUser()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
