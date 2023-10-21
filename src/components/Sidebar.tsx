"use client"

import {
    Plus,
    LogOut,
    Search,
    Users2,
    UserCog,
    Sparkles,
    ScrollText,
    LayoutDashboard,
} from "lucide-react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TSidebar } from "@/types/index";
import { Button } from "@/components/ui/button";


const sidebarData: TSidebar[] = [
    {
        icon: <LayoutDashboard className="h-5 w-5" />,
        title: "Dashboard",
        link: "/dashboard/board"
    },
    {
        icon: <Sparkles className="h-5 w-5" />,
        title: "Friends",
        link: "/dashboard/friends"
    },
    {
        icon: <Users2 className="h-5 w-5" />,
        title: "Groups",
        link: "/dashboard/groups"
    },
    {
        icon: <ScrollText className="h-5 w-5" />,
        title: "Activities",
        link: "/dashboard/activities"
    },
]

export default function Sidebar() {
    const [activeTab, setActiveTab] = React.useState<number>(0);

    return (
        <div
            className="p-4 h-full flex flex-col justify-between border-r bg-white shadow-xl">
            <div className="flex gap-4 flex-col">
                <Link href="/dashboard" className="w-full flex gap-2 items-center justify-start cursor-pointer">
                    <Image
                        className="rounded-lg"
                        width={48} height={48} draggable={false}
                        src="/assets/images/logo/apple-touch-icon-precomposed.png" alt="logo" />
                    <span className="text-xl font-bold tracking-tighter">
                        Splitwise
                    </span>
                </Link>
                <div className="flex gap-4 flex-col">
                    <div className="mt-2 flex gap-2 flex-col">
                        <Button
                            variant={"outline"}
                            className="w-full p-4 h-full flex gap-2 items-center justify-start cursor-pointer text-teal-500 border border-teal-500 rounded-lg bg-white hover:text-white hover:bg-teal-500"
                        >
                            <>
                                <Plus />
                                <span>Add Expense</span>
                            </>
                        </Button>
                        <Button
                            variant={"outline"}
                            className="w-full p-4 h-full flex gap-2 items-center justify-start cursor-pointer text-teal-500 border border-teal-500 rounded-lg bg-white hover:text-white hover:bg-teal-500"
                        >
                            <>
                                <Search />
                                <span>Search</span>
                            </>
                        </Button>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-3">
                            {
                                sidebarData.map((item: TSidebar, index: number) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={item.link}
                                            onClick={() => setActiveTab(index)}
                                            className={cn(
                                                "flex transform items-center cursor-pointer rounded-lg px-3 py-4 text-slate-600 bg-teal-100/10 border transition-colors duration-300 hover:text-slate-700 hover:bg-teal-300/10",
                                                activeTab === index && "text-teal-600 bg-slate-200 hover:text-teal-700 hover:bg-slate-300"
                                            )}
                                        >
                                            {item.icon}
                                            <span className="mx-2 text-sm font-medium">
                                                {item.title}
                                            </span>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className="px-4 py-8 w-full flex gap-2 items-center justify-start">
                        <Avatar>
                            <AvatarImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="text-base font-bold tracking-tighter text-slate-800">Dan Abromov</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    asChild
                    align={"end"}
                    className="ml-6 w-64"
                >
                    <div className="flex gap-4 flex-col">
                        <span className="text-sm font-bold">User Setting</span>
                        <div className="flex gap-1 flex-col items-center">
                            <Button
                                variant={"outline"}
                                className="w-full p-3 h-full flex gap-4 items-center justify-start cursor-pointer rounded-lg"
                            >
                                <>
                                    <UserCog size={16} />
                                    <span>Profile</span>
                                </>
                            </Button>
                            <Button
                                variant={"destructive"}
                                className="w-full p-3 h-full flex gap-4 items-center justify-start cursor-pointer rounded-lg bg-red-400"
                            >
                                <>
                                    <LogOut />
                                    <span>Search</span>
                                </>
                            </Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}
