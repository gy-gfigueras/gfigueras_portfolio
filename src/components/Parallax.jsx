import { useEffect } from 'react';
export const Parallax = () => {
    const handleMouseMove = (e) => {
        document.querySelectorAll(".parallax").forEach(function (move) {
            var movingValue = move.getAttribute("speed");
            var x = (e.clientX * movingValue) / 250;
            var y = (e.clientY * movingValue) / 250;
            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        });
    };

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
};
