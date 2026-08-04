"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

import { submissionData } from "@/data/submissionData";

export default function SubmissionChart(){


    return (

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">


            <div className="mb-6">

                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Submission Activity
                </h2>


                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Your opportunity submissions over time
                </p>


            </div>



            <div className="h-[320px] w-full">


                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <LineChart
                        data={submissionData}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />


                        <XAxis
                            dataKey="month"
                        />


                        <YAxis
                            allowDecimals={false}
                        />


                        <Tooltip
                        />


                        <Line
                            type="monotone"
                            dataKey="submissions"
                            stroke="#0284c7"
                            strokeWidth={3}
                            dot={{
                                r:5,
                            }}
                            activeDot={{
                                r:7,
                            }}
                        />


                    </LineChart>


                </ResponsiveContainer>


            </div>


        </section>

    );

}