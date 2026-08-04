"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

import { opportunityData } from "@/data/chartData";

export default function OpportunityChart(){
    return (
        <section
            className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            dark:border-slate-800
            dark:bg-slate-950
            "
        >
            <div
                className="mb-6"
            >

                <h2
                    className="
                    text-xl
                    font-bold
                    text-slate-900
                    dark:text-white
                    "
                >
                    Opportunity Overview
                </h2>


                <p
                    className="
                    mt-1
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                    "
                >
                    Available opportunities by category
                </p>


            </div>



            <div
                className="
                h-[320px]
                w-full
                "
            >

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <BarChart
                        data={opportunityData}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />


                        <XAxis
                            dataKey="name"
                            tick={{
                                fill:"#64748b"
                            }}
                        />


                        <YAxis
                            allowDecimals={false}
                            tick={{
                                fill:"#64748b"
                            }}
                        />


                        <Tooltip
                            cursor={{
                                fill:"rgba(14,165,233,0.1)"
                            }}
                        />


                        <Bar
                            dataKey="count"
                            fill="#0284c7"
                            radius={[
                                8,
                                8,
                                0,
                                0
                            ]}
                        />


                    </BarChart>


                </ResponsiveContainer>


            </div>


        </section>

    );

}