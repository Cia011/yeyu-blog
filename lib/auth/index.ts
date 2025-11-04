import { auth } from '@/auth'

export async function noPermission() {
  const session = await auth()

  // 修改为基于角色检查，而不是邮箱
  if (!session?.user?.role) {
    return true
  }
  else {
    // 如果当前用户角色是admin，返回false（有权限）
    return session.user.role !== 'admin'
  }
}

export async function requireAdmin() {
  if (await noPermission()) {
    throw new Error('权限不够喵~')
  }
}
