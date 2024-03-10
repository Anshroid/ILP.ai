import {Fragment} from "react";

export default function Stats({statistics, ...props}) {
    return (
        <Fragment props={props}>
            <div class="grid gap-4 lg:gap-8 md:grid-cols-3 p-8 pt-20">

                {statistics.map(statistic =>
                    <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800 statistic">
                        <div class="space-y-2">
                            <div
                                class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                                <span>{statistic.name}</span>
                            </div>

                            <div class="text-3xl text-white text-left">
                                {statistic.value}
                            </div>

                            <div
                                class={statistic.good ? "flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600" : "flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600"}>

                                <span>{statistic.percentageChange}</span>

                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                     fill="currentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d={statistic.increase ? "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" : "M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"}
                                          clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    )
}