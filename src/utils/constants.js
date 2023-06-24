export const API_URL = '/api';

export const getUserInitials = (user) => {
    const firstName = user?.firstName;
    const lastName = user?.lastName;

    return `${firstName[0] + lastName[0]}`.toUpperCase();
};