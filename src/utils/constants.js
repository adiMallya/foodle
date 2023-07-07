const API_URL = '/api';

const getUserInitials = (user) => {
    const firstName = user?.firstName;
    const lastName = user?.lastName;

    return `${firstName[0] + lastName[0]}`.toUpperCase();
};

const avatarList = [
    { src: "https://res.cloudinary.com/dtaztriby/image/upload/v1688581262/twizzle-social/avatars/avatar1_swqmjq.png", label: "avatar1" },
    { src: "https://res.cloudinary.com/dtaztriby/image/upload/v1688581261/twizzle-social/avatars/avatar2_g1h9jh.png", label: "avatar2" },
    { src: "https://res.cloudinary.com/dtaztriby/image/upload/v1688581261/twizzle-social/avatars/avatar3_iwsdpz.png", label: "avatar3" },
    { src: "https://res.cloudinary.com/dtaztriby/image/upload/v1688581261/twizzle-social/avatars/avatar5_cq3fux.png", label: "avatar4" },
    { src: "https://res.cloudinary.com/dtaztriby/image/upload/v1688581261/twizzle-social/avatars/avatar4_fdepbs.png", label: "avatar5" },
    { src: "https://res.cloudinary.com/dtaztriby/image/upload/v1688581261/twizzle-social/avatars/avatar6_t3icnh.png", label: "avatar6" }
];

export { API_URL, getUserInitials, avatarList };