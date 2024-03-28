"use client"

import React, { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Tabs, Tab } from "@nextui-org/tabs";

//Content
import Tab1 from "./components/Tab1";

interface tabsProps {
   tab: ReactNode,
   title: string
}

const tabs: tabsProps[] = [
   {
      tab: <Tab1 key={0} />,
      title: 'Security',
   },{
      tab: <Tab1 key={0} />,
      title: 'MultCards',
   },{
      tab: <Tab1 key={0} />,
      title: 'Worldwide',
   }
]

export default function SectionDetails(): ReactNode {

   return (
      <section className="max-w-screen overflow-hidden pb-14 @laptop:py-32 bg-gradient-to-b from-transparent to-[#F6F6F8]">
         <ContainerGrid className="flex items-center flex-col @laptop:flex-row justify-between gap-12 @laptop:gap-[4.5rem]">

            <Tabs
               className="flex @laptop:order-last"
               classNames={{
                  tabList: "flex @laptop:flex-col flex-row justify-start overflow-auto w-screen @laptop:w-auto p-0 gap-0 @laptop:gap-3",
                  cursor: "",
                  tab: "@laptop:w-1 @laptop:min-w-0 px-page-padding bg-[#F9F9FC] @laptop:h-8 h-24 @laptop:p-0 @laptop:data-[selected=true]:bg-brand-blue-default @laptop:bg-brand-blue-light @laptop:rounded-sm transition duration-300 ease-in-out data-[selected=true]:border-b-4 data-[selected=true]:border-brand-blue-default  @laptop:data-[selected=true]:border-none",
                  tabContent: "",
                  panel: "w-full"
               }}
            >
               {
                  tabs.map(({ tab, title }: tabsProps, index: number) => {
                     return (
                        <Tab
                           key={index}
                           title={
                              <div className="@laptop:w-1 @laptop:h-8">
                                 <span className="visible font-medium text-xl text-neutral-gray-200 @laptop:hidden">
                                    {title}
                                 </span>
                              </div>
                           }
                        >
                           {tab}
                        </Tab >
                     )
                  })
               }
            </Tabs>
         </ContainerGrid>
      </section >
   )
}
