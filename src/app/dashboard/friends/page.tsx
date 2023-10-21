"use client"

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import { Timeline } from '@mantine/core';

export default function Friends() {

    return (
        <div className="w-full h-full p-4 flex gap-4 flex-col overflow-y-scroll">
            <div className=" div-slate-900 div-2xl font-black tracking-tighter">
                Friends:
            </div>
            <div className="flex gap-2 flex-col">
                <div className="flex flex-col">
                    <div className="p-4 flex items-center justify-between border rounded-tl-lg rounded-tr-lg bg-slate-50">
                        <div className="flex gap-4 items-center">
                            <Avatar>
                                <AvatarImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="div-lg font-semibold tracking-tighter">elon_musk</div>
                        </div>
                        <div className="flex gap-4 items-center justify-evenly">
                            <span className="div-gray-700">you owe</span>
                            <span className="div-xl text-red-500 font-bold tracking-tighter">
                                <span>$</span>
                                <span>40</span>
                            </span>
                        </div>
                    </div>
                    <div className="border p-6 rounded-bl-lg rounded-br-lg">
                        <Timeline
                            color="teal"
                            active={3}
                            bulletSize={16}
                        >
                            <Timeline.Item
                                title={
                                    (
                                        <div className="w-fit flex gap-1 items-center">
                                            <span>You owe</span>
                                            <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                <span>@</span>
                                                <span>Elon musk</span>
                                            </span>
                                            <span className="text-red-600 font-bold tracking-tighter">
                                                <span>$</span>
                                                <span>40</span>
                                            </span>
                                            <span>form</span>
                                            <span className="font-medium cursor-pointer text-indigo-600 hover:text-indigo-700"
                                            >test_group1</span>
                                        </div>
                                    )
                                }
                            >
                                <div>2 hours ago</div>
                            </Timeline.Item>
                            <Timeline.Item
                                title={
                                    (
                                        <div className="w-fit flex gap-1 items-center">
                                            <span>You owe</span>
                                            <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                <span>@</span>
                                                <span>Elon musk</span>
                                            </span>
                                            <span className="text-red-600 font-bold tracking-tighter">
                                                <span>$</span>
                                                <span>40</span>
                                            </span>
                                            <span>form</span>
                                            <span className="font-medium cursor-pointer text-indigo-600 hover:text-indigo-700"
                                            >test_group1</span>
                                        </div>
                                    )
                                }
                            >
                                <div>2 hours ago</div>
                            </Timeline.Item>
                            <Timeline.Item
                                title={
                                    (
                                        <div className="w-fit flex gap-1 items-center">
                                            <span>You owe</span>
                                            <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                <span>@</span>
                                                <span>Elon musk</span>
                                            </span>
                                            <span className="text-red-600 font-bold tracking-tighter">
                                                <span>$</span>
                                                <span>40</span>
                                            </span>
                                            <span>form</span>
                                            <span className="font-medium cursor-pointer text-indigo-600 hover:text-indigo-700"
                                            >test_group1</span>
                                        </div>
                                    )
                                }
                            >
                                <div>2 hours ago</div>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="p-4 flex items-center justify-between border rounded-lg bg-slate-50">
                        <div className="flex gap-4 items-center">
                            <Avatar>
                                <AvatarImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="div-lg font-semibold tracking-tighter">jeff bezos</div>
                        </div>
                        <div className="flex gap-4 items-center justify-evenly">
                            <span className="div-gray-700">No expense</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
