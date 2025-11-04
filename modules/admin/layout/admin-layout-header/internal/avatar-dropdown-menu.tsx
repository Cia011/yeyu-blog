'use client'

// import YeYuAvatar from '@/components/shared/yeyu-avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'

function AvatarDropdownMenu() {
  const { data: session } = useSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        设置
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-lg w-56">
        <DropdownMenuLabel className="p-1 flex gap-2 items-center">
          设置
          <section>
            <h3 className="font-mono">
              {'名称:'}
              {session?.user?.username || '管理员'}
              
            </h3>
            <small className="font-thin">
              {'权限:'}
              {session?.user?.role || ''}
            </small>
          </section>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            signOut()
          }}
        >
          <LogOut />
          退出登录
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarDropdownMenu
