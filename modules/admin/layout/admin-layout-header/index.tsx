'use client'

import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { getActiveAdminPath } from '@/lib/url'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import AdminLogo from './internal/admin-logo'
import AvatarDropdownMenu from './internal/avatar-dropdown-menu'

const AdminRoutes = [
  {
    path: '/admin',
    pathName: '首页',
  },
  {
    path: '/admin/blog',
    pathName: '博客',
  },
  {
    path: '/admin/note',
    pathName: '笔记',
  },
  {
    path: '/admin/tag',
    pathName: '标签',
  },
  {
    path: '/admin/echo',
    pathName: '引用',
  },
] as const

function AdminNavbar() {
  const pathname = usePathname()
  const activeUrl = getActiveAdminPath(pathname)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className="sticky top-0 backdrop-blur-lg z-50 border-b border-dashed
                    flex justify-between items-center px-4 sm:px-6 py-2 sm:py-0
                    min-h-12 sm:h-14"
      >
        <nav className="flex gap-2 sm:gap-4 items-center flex-wrap">
          {/* 左侧logo区域 */}
          <AdminLogo />
          {/* 路由 - 移动端隐藏部分菜单，显示更多按钮 */}
          <div className="hidden sm:flex gap-2 sm:gap-4">
            {AdminRoutes.map(link => (
              <Link href={link.path} key={link.path}>
                <Button
                  className="rounded-lg text-sm sm:text-base cursor-pointer"
                  variant={activeUrl === link.path ? 'default' : 'ghost'}
                  size="sm"
                >
                  {link.pathName}
                </Button>
              </Link>
            ))}
          </div>
          {/* 移动端菜单按钮 */}
          <div className="sm:hidden">
            <Button 
              variant="outline" 
              size="sm"
              onClick={toggleMenu}
            >
              {isMenuOpen ? '关闭' : '菜单'}
            </Button>
          </div>
        </nav>
        <section className="flex gap-2 sm:gap-4 items-center">
          <ModeToggle />
          <AvatarDropdownMenu />
        </section>
      </header>
      
      {/* 移动端菜单展开面板 */}
      {isMenuOpen && (
        <div className="sm:hidden fixed top-12 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-dashed z-40 p-4">
          <div className="flex flex-col gap-2">
            {AdminRoutes.map(link => (
              <Link 
                href={link.path} 
                key={link.path}
                onClick={closeMenu}
              >
                <Button
                  className="w-full justify-start rounded-lg text-sm cursor-pointer"
                  variant={activeUrl === link.path ? 'default' : 'ghost'}
                  size="sm"
                >
                  {link.pathName}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default AdminNavbar