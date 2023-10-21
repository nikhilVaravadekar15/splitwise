"use client"

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import React from "react";
import Image from "next/image";
import { TSlider } from "@/types/index";
import { Button } from "@/components/ui/button";
import { groupActions, transactionActions } from "@/static/data/index";
import { Accordion, Timeline } from "@mantine/core";



export default function Group(props: any) {

    const [activeAccordion, setActiveAccordion] = React.useState<number>(0)

    function setActiveAccordionStatus(index: number) {
        setActiveAccordion(index)
    }

    return (
        <>
            <div className="w-full h-full p-4 flex gap-4 flex-col overflow-y-scroll">
                <div className="relative px-4 py-2 flex items-center justify-between bg-white border rounded-xl">
                    <GroupHeader />
                </div>
                <div className="relative my-4 flex gap-1.5 flex-col bg-white">
                    <div className="text-base font-bold flex gap-1 text-gray-700">
                        <span>May</span>
                        <span>2023</span>
                    </div>
                    <Accordion
                        chevronPosition="left"
                        className="flex gap-0.5 flex-col rounded-xl"

                    >
                        {
                            transactionActions.map((item: TSlider, index: number) => {
                                return (
                                    <TransactionComponent
                                        key={index}
                                        item={item}
                                    />
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </>
    )
}


function GroupHeader() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                    <Image
                        width={48}
                        height={48}
                        alt="elon_musk"
                        draggable="false"
                        className="w-10 h-10 cursor-pointer rounded-full"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <div className="text-2xl font-black tracking-tighter">Test Group</div>
                </div>
                <div className="flex gap-1 items-center text-red-600">
                    <span className="text-lg">You owe</span>
                    <span className="text-xl font-black tracking-tighter">
                        <span>$</span>
                        <span>50.0</span>
                    </span>
                    <span className="text-lg">overall</span>
                </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
                {
                    groupActions.map((item: TSlider, index: number) => {
                        return (
                            <TooltipProvider key={index}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className="rounded-full"
                                        >
                                            {
                                                item.icon
                                            }
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{item.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )
                    })
                }
            </div>
        </>
    )
}

function TransactionComponent({ item }: { item: TSlider }) {
    return (
        <Accordion.Item value={`${item.title}`} className="rounded-xl border hover:shadow-md">
            <Accordion.Control className="rounded-xl hover:bg-slate-50">
                <div className="w-full p-2 flex items-center justify-between">
                    <div className="flex gap-8 items-center">
                        <span className="py-1 px-4 text-xs font-bold text-gray-700 bg-gray-200 rounded-lg flex flex-col gap-1 items-center justify-center hover:bg-gray-300">
                            <span>May</span>
                            <span>24</span>
                        </span>
                        <div className="relative cursor-pointer">
                            <Avatar>
                                <AvatarImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="font-bold text-gray-700">
                                dinner @Wok & Chops
                            </span>
                            <div className="flex gap-2 justify-center items-center text-sm">
                                <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                    <span>@</span>
                                    <span>elon_musk</span>
                                </span>
                                <span className="text-gray-700">paid</span>
                                <span className="text-base text-red-500 font-bold tracking-tighter">
                                    <span>$</span>
                                    <span>40</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center text-red-500">
                        <span className="text-base">you borrowed</span>
                        <span className="text-xl font-bold tracking-tighter">
                            <span>$</span>
                            <span>40</span>
                        </span>
                    </div>
                </div>
            </Accordion.Control>
            <Accordion.Panel className="relative">
                <div className="ml-36 flex flex-col">

                    <Timeline
                        bulletSize={16}
                        className="w-1/3 p-2"
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
                <div className="absolute top-1 right-6 flex gap-2">
                    {
                        transactionActions.map((item: TSlider, index: number) => {
                            return (
                                <TooltipProvider key={index}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className="rounded-full"
                                            >
                                                {
                                                    item.icon
                                                }
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{item.title}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )
                        })
                    }
                </div>
            </Accordion.Panel>
        </Accordion.Item>
    )
}
