"use client"

import {
    Hash
} from "lucide-react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import Link from "next/link"
import { Timeline } from '@mantine/core';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


export default function Groups() {

    return (
        <div className="w-full h-full p-4 flex gap-4 flex-col overflow-y-scroll">
            <div className="text-slate-900 text-2xl font-black tracking-tighter">
                Groups:
            </div>

            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    408: 1,
                    768: 2,
                    1024: 3
                }}
                className="present-groups"
            >
                <Masonry
                    gutter={"16px"}
                    style={{
                        gap: "16px"
                    }}
                >

                    <GroupComponent />
                    <GroupComponent />
                    <GroupComponent />
                    <GroupComponent />

                    <div className="no-group-tansaction p-4 flex gap-4 flex-col border rounded-md bg-slate-50 hover:bg-white hover:shadow-md">
                        <div className="flex gap-4 items-center">
                            <Hash className="p-1 w-8 h-8 font-bold text-purple-600 cursor-pointer rounded-full" />
                            <div className="text-2xl font-black tracking-tighter">No Group transactions</div>
                        </div>
                        <div className="flex gap-4 flex-col">
                            <div className="px-6">
                                <div className="flex gap-3 items-center text-teal-600">
                                    <span className="text-lg">You are owed</span>
                                    <span className="text-2xl font-black tracking-tighter">
                                        <span>$</span>
                                        <span>00.0</span>
                                    </span>
                                </div>
                                <Timeline
                                    bulletSize={16}
                                    className="p-4"
                                >
                                    <Timeline.Item
                                        title={
                                            (
                                                <div className="flex gap-1 items-center justify-between">
                                                    <span className="flex items-center gap-1">
                                                        <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                            <span>@</span>
                                                            <span>Elon musk</span>
                                                        </span>
                                                        <span>owes you</span>

                                                    </span>
                                                    <span className="text-teal-600 font-black tracking-tighter">
                                                        <span>$</span>
                                                        <span>00.0</span>
                                                    </span>
                                                </div>
                                            )
                                        }
                                        bullet={
                                            <Avatar>
                                                <AvatarImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        }
                                    >
                                        <div>2 hours ago</div>
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                            <div className="px-6">
                                <div className="flex gap-3 items-center text-red-600">
                                    <span className="text-lg">You owe</span>
                                    <span className="text-2xl font-black tracking-tighter">
                                        <span>$</span>
                                        <span>50.0</span>
                                    </span>
                                </div>
                                <Timeline
                                    bulletSize={16}
                                    className="p-4"
                                >
                                    <Timeline.Item
                                        title={
                                            (
                                                <div className="flex gap-1 items-center justify-between">
                                                    <span className="flex items-center gap-1">
                                                        <span>You owe</span>
                                                        <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                            <span>@</span>
                                                            <span>Elon musk</span>
                                                        </span>
                                                    </span>
                                                    <span className="text-red-600 font-black tracking-tighter">
                                                        <span>$</span>
                                                        <span>20.0</span>
                                                    </span>
                                                </div>
                                            )
                                        }
                                        bullet={
                                            <Avatar>
                                                <AvatarImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        }
                                    >
                                        <div>2 hours ago</div>
                                    </Timeline.Item>
                                    <Timeline.Item
                                        title={
                                            (
                                                <div className="flex gap-1 items-center justify-between">
                                                    <span className="flex items-center gap-1">
                                                        <span>You owe</span>
                                                        <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                            <span>@</span>
                                                            <span>Elon musk</span>
                                                        </span>
                                                    </span>
                                                    <span className="text-red-600 font-black tracking-tighter">
                                                        <span>$</span>
                                                        <span>30.0</span>
                                                    </span>
                                                </div>
                                            )
                                        }
                                        bullet={
                                            <Avatar>
                                                <AvatarImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        }
                                    >
                                        <div>2 hours ago</div>
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                        </div>
                    </div>

                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

function GroupComponent() {
    return (
        <Link
            href={"/dashboard/group/asdasf-asdasd-asd-asd-asfqed"}
            className="group p-4 flex gap-4 flex-col items-stretch border rounded-lg bg-slate-50 hover:bg-white hover:shadow-md"
        >
            <div className="flex gap-4 items-center">
                <Avatar>
                    <AvatarImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-2xl font-black tracking-tighter">Test Group</div>
            </div>
            <div className="flex gap-4 flex-col">
                <div className="px-6">
                    <div className="flex gap-3 items-center text-teal-600">
                        <span className="text-lg">You are owed</span>
                        <span className="text-2xl font-black tracking-tighter">
                            <span>$</span>
                            <span>00.0</span>
                        </span>
                    </div>
                    <Timeline
                        bulletSize={16}
                        className="p-4"
                    >
                        <Timeline.Item
                            title={
                                (
                                    <div className="flex gap-1 items-center justify-between">
                                        <span className="flex items-center gap-1">
                                            <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                <span>@</span>
                                                <span>Elon musk</span>
                                            </span>
                                            <span>owes you</span>

                                        </span>
                                        <span className="text-teal-600 font-black tracking-tighter">
                                            <span>$</span>
                                            <span>00.0</span>
                                        </span>
                                    </div>
                                )
                            }
                            bullet={
                                <Avatar>
                                    <AvatarImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            }
                        >
                            <div>2 hours ago</div>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <div className="px-6">
                    <div className="flex gap-3 items-center text-red-600">
                        <span className="text-lg">You owe</span>
                        <span className="text-2xl font-black tracking-tighter">
                            <span>$</span>
                            <span>50.0</span>
                        </span>
                    </div>
                    <Timeline
                        bulletSize={16}
                        className="p-4"
                    >
                        <Timeline.Item
                            title={
                                (
                                    <div className="flex gap-1 items-center justify-between">
                                        <span className="flex items-center gap-1">
                                            <span>You owe</span>
                                            <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                <span>@</span>
                                                <span>Elon musk</span>
                                            </span>
                                        </span>
                                        <span className="text-red-600 font-black tracking-tighter">
                                            <span>$</span>
                                            <span>20.0</span>
                                        </span>
                                    </div>
                                )
                            }
                            bullet={
                                <Avatar>
                                    <AvatarImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            }
                        >
                            <div>2 hours ago</div>
                        </Timeline.Item>
                        <Timeline.Item
                            title={
                                (
                                    <div className="flex gap-1 items-center justify-between">
                                        <span className="flex items-center gap-1">
                                            <span>You owe</span>
                                            <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                <span>@</span>
                                                <span>Elon musk</span>
                                            </span>
                                        </span>
                                        <span className="text-red-600 font-black tracking-tighter">
                                            <span>$</span>
                                            <span>30.0</span>
                                        </span>
                                    </div>
                                )
                            }
                            bullet={
                                <Avatar>
                                    <AvatarImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            }
                        >
                            <div>2 hours ago</div>
                        </Timeline.Item>
                        <Timeline.Item
                            title={
                                (
                                    <div className="flex gap-1 items-center justify-between">
                                        <span className="flex items-center gap-1">
                                            <span>You owe</span>
                                            <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                <span>@</span>
                                                <span>Elon musk</span>
                                            </span>
                                        </span>
                                        <span className="text-red-600 font-black tracking-tighter">
                                            <span>$</span>
                                            <span>30.0</span>
                                        </span>
                                    </div>
                                )
                            }
                            bullet={
                                <Avatar>
                                    <AvatarImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            }
                        >
                            <div>2 hours ago</div>
                        </Timeline.Item>

                    </Timeline>
                </div>
            </div>
        </Link>
    )
}
