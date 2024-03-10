import {Fragment} from "react";
import Stats from "./Stats";

const statistics = [
    {name: "Distractions", value: 23, percentageChange: "18% decrease from last week", increase: false, good: true},
    {name: "Revision Hours", value: 20, percentageChange: "2% decrease from last week", increase: false, good: false},
    {name: "Lessons to revisit", value: "Up to date!", percentageChange: "All caught up!", increase: true, good: true},
]

export default function Dashboard({user, ...props}) {
    return (
        <Fragment props={props}>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-white text-center inter">{user.name}'s
                    Dashboard - {new Date().toLocaleDateString(undefined, {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</h1>
            </div>
            <Stats statistics={statistics}></Stats>
        </Fragment>
    )
}