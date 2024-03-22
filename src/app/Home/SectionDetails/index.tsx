"use client"

import React, { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Tabs, Tab } from "@nextui-org/tabs";

//Content
import Tab1 from "./components/Tab1";

const tabs = [<Tab1 />]

export default function SectionDetails(): ReactNode {

   return (
      <section className="py-32 bg-gradient-to-b from-transparent to-[#F6F6F8]">
         <ContainerGrid className="flex items-center justify-between gap-[4.5rem]">

            <Tabs
               className="flex order-last"
               classNames={{
                  tabList: "flex flex-col",
                  cursor: "",
                  tab: "w-1 h-8 p-0 data-[selected=true]:bg-brand-blue-default bg-brand-blue-light rounded-sm transition duration-300 ease-in-out",
                  tabContent: "",
                  panel: "w-full"
               }}
            >
               {
                  tabs.map((item: ReactNode, index: number) => {
                     return (
                        <Tab
                           key={index}
                           title={
                              <div className="w-1 h-8"></div>
                           }
                        >
                           {item}
                        </Tab >
                     )
                  })
               }
            </Tabs>
         </ContainerGrid>
      </section >
   )
}
