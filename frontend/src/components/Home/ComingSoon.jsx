import React from "react";
import styles from "../../style";
import { one, two, three } from "../../assets";
import Card from "./Card";

const events = [
    {
        id: 1,
        imageUrl: one,
        title: 'Trending Event 1',
        date: '2024/04/07 (Sun)',
        location: 'Taiwan, Taipei',
        link: '/event/1'
    },
    {
        id: 2,
        imageUrl: two,
        title: 'Trending Event 2',
        date: '2024/04/07 (Sun)',
        location: 'Taiwan, Taipei',
        link: '/event/2'
    },
    {
        id: 3,
        imageUrl: one,
        title: 'Trending Event 3',
        date: '2024/04/07 (Sun)',
        location: 'Taiwan, Taipei',
        link: '/event/3'
    },
    {
        id: 4,
        imageUrl: two,
        title: 'Trending Event 4',
        date: '2024/04/07 (Sun)',
        location: 'Taiwan, Taipei',
        link: '/event/4'
    },
];

const ComingSoon = () => {
    return (
        <div className={`bg-black text-white ${styles.flexStart} ${styles.padding2} `}>
            <div className={`${styles.boxWidth}`}>
                <div className="flex flex-wrap gap-4">
                    {events.map((event) => (
                        <Card key={event.id} {...event} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;