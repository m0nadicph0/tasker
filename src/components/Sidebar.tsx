'use client'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { ChevronDown, ChevronUp, Cloud, CreditCard, Dot, DotSquare, Gauge, Github, Keyboard, LifeBuoy, List, LogOut, LucideIcon, MoreVertical, ServerCog, Settings, Settings2, Star, TvIcon, User, User2, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger, DropdownMenuGroup } from './ui/dropdown-menu'

function SidebarItem({ to, Icon, children }: { to: any, Icon: React.ElementType, children: ReactNode }) {
    const pathname = usePathname()

    return (
        <div className=''>
            <Link href={to}>
                <span className={cn(
                    'flex flex-row gap-2 mx-2 px-2 my-1 py-3  hover:rounded-md text-sm rounded-md hover:bg-muted',
                    pathname === to ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
                )}>
                    <Icon className='w-5 h-5' />
                    <span className='ml-1 font-semibold'>{children}</span>
                </span>
            </Link>
        </div>
    )
}

function Brand() {
    return (
        <div className='h-20 px-3 py-4 flex flex-row'>
            <svg id="logo-84" height="40" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M9.98578 4.11462L0 14C1.99734 15.9773 4.27899 17.6437 6.76664 18.9474C7.45424 20.753 8.53203 22.4463 10 23.8995C15.5229 29.3668 24.4772 29.3668 30 23.8995C31.468 22.4463 32.5458 20.753 33.2334 18.9473C35.721 17.6437 38.0027 15.9773 40 14L30.0223 4.12266C30.0149 4.11527 30.0075 4.10788 30 4.1005C24.4772 -1.36683 15.5229 -1.36683 10 4.1005C9.99527 4.10521 9.99052 4.10991 9.98578 4.11462ZM29.0445 20.7309C26.1345 21.7031 23.0797 22.201 20 22.201C16.9203 22.201 13.8656 21.7031 10.9556 20.7309C11.2709 21.145 11.619 21.5424 12 21.9196C16.4183 26.2935 23.5817 26.2935 28 21.9196C28.381 21.5424 28.7292 21.145 29.0445 20.7309ZM12.2051 5.8824C12.9554 6.37311 13.7532 6.79302 14.588 7.13536C16.3038 7.83892 18.1428 8.20104 20 8.20104C21.8572 8.20104 23.6962 7.83892 25.412 7.13536C26.2468 6.79302 27.0446 6.3731 27.795 5.88238C23.4318 1.77253 16.5682 1.77254 12.2051 5.8824Z" fill="#3B4158"></path></svg>
            <span className='text-2xl mt-1 ml-2 font-extrabold'>Tasker</span>
        </div>
    )
}

function Footer() {
    const router = useRouter()

    return (
        <div className='flex flex-row py-2 px-2 border-t'>
            <Avatar>
                <AvatarImage className='h-10' src='https://ui.shadcn.com/avatars/01.png' />
            </Avatar>
            <span className='mt-2 ml-3 grow'>Bruce Wayne</span>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        <MoreVertical />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <Link href="/profile">
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href="/settings">
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default function Sidebar() {
    return (
        <div className='h-screen border-r'>
            <div className="flex flex-col h-full">
                <Brand />
                <nav className='grow'>
                    <SidebarItem to="/dashboard" Icon={Gauge}> Dashboard</SidebarItem>
                    <SidebarItem to="/lists" Icon={List}>Lists</SidebarItem>
                    <SidebarItem to="/favourites" Icon={Star}>Favourites</SidebarItem>
                    <SidebarItem to="/settings" Icon={Settings2}>Settings</SidebarItem>
                </nav>
                <Footer />
            </div>
        </div>
    )
}
