export const getPostTime = (date) => {
    const timePosted = new Date(date);
    const currentTime = new Date();

    const milisec = Math.floor(currentTime - timePosted);
    const sec = Math.floor(milisec / 1000);

    if (sec > 59) {
        const min = Math.floor(sec / 60);
        if (min > 59) {
            const hr = Math.floor(min / 60);
            if (hr > 23) {
                const days = Math.floor(hr / 24);
                if (days > 30) {
                    const month = Math.floor(days / 30);
                    if (month > 11) {
                        return timePosted.toLocaleDateString("en-us", {
                            day: "numeric",
                            year: "numeric",
                            month: "short",
                        });
                    } else {
                        return `${month}mo ago`;
                    }
                } else {
                    return `${days}d ago`;
                }
            } else {
                return `${hr}hr ago`;
            }
        } else {
            return `${min}min ago`;
        }
    } else {
        return `few seconds ago`;
    }
};