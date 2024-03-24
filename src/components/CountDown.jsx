import { Box } from "@mui/material";
import { useState, useEffect } from "react";

export const CountDown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-04-01T10:00:00") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

       
        return () => clearTimeout(timer);
    }, [timeLeft]); 

    return (
        <Box className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <Box className="flex flex-col p-2 bg-[#1BAA76] rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                    <span style={{"--value": timeLeft.days ?? 0}}>{timeLeft.days ?? 0}</span>
                </span>
                days
            </Box>
            <Box className="flex flex-col p-2 bg-[#1BAA76] rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                    <span style={{"--value": timeLeft.hours ?? 0}}>{timeLeft.hours ?? 0}</span>
                </span>
                hours
            </Box>
            <Box className="flex flex-col p-2 bg-[#1BAA76] rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                    <span style={{"--value": timeLeft.minutes ?? 0}}>{timeLeft.minutes ?? 0}</span>
                </span>
                min
            </Box>
            <Box className="flex flex-col p-2 bg-[#1BAA76] rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                    <span style={{"--value": timeLeft.seconds ?? 0}}>{timeLeft.seconds ?? 0}</span>
                </span>
                sec
            </Box>
        </Box>
    );
};

