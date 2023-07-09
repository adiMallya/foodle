import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "t7cZfWIq-a",
    firstName: "Adithya",
    lastName: "Mallya",
    username: "amallya",
    password: "P@ssw0rd",
    bio: "Busy at work.",
    website: "https://github.com/adiMallya",
    profileAvatar: "https://res.cloudinary.com/dtaztriby/image/upload/v1686424977/twizzle-social/avatars/drew-hays-Kt8eGw8_S8Y-unsplash-scaled-e1664855431566.jpg_fch6nr.webp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: "79Gksh9otl", username: "vo_thong", firstName: "Thong",
        lastName: "Vo", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/20221023121016-635569a0de3f8345fb573ce3jpeg_kxznr8.webp"
      },
      {
        _id: "abcZgWIp6q", username: "mellis123", firstName: "Mellis",
        lastName: "Carpenter", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1688581261/twizzle-social/avatars/avatar4_fdepbs.png"
      },

    ],
    followers: [
      {
        _id: "t7cZfWIp-q", username: "johndoe", firstName: "John",
        lastName: "Doe", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/1373242_prl159.jpg"
      },
      {
        _id: "1T6Be1QpLm", username: "josephtess", firstName: "Tess",
        lastName: "Joesph", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp"
      },
      {
        _id: "79Gksh9otl", username: "vo_thong", firstName: "Thong",
        lastName: "Vo", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/20221023121016-635569a0de3f8345fb573ce3jpeg_kxznr8.webp"
      },
    ],
  },
  {
    _id: "t7cZfWIp-q",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "P@ssw0rd",
    bio: "Living life on strings.",
    website: "https://www.doejohn.dev",
    profileAvatar: "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/1373242_prl159.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: "79Gksh9otl", username: "vo_thong", firstName: "Thong",
        lastName: "Vo", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/20221023121016-635569a0de3f8345fb573ce3jpeg_kxznr8.webp"
      },
      {
        _id: "1T6Be1QpLm", username: "josephtess", firstName: "Tess",
        lastName: "Joesph", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp"
      },
    ],
    followers: [
      {
        _id: "1T6Be1QpLm", username: "josephtess", firstName: "Tess",
        lastName: "Joesph", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp"
      },
    ],
  },
  {
    _id: "79Gksh9otl",
    firstName: "Thong",
    lastName: "Vo",
    username: "vo_thong",
    password: "P@ssw0rd",
    bio: "Hustling. Diving. Running.",
    website: "https://www.thongvo.me",
    profileAvatar: "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/20221023121016-635569a0de3f8345fb573ce3jpeg_kxznr8.webp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: "1T6Be1QpLm", username: "josephtess", firstName: "Tess",
        lastName: "Joesph", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp"
      }
    ],
    followers: [
      {
        _id: "t7cZfWIp-q", username: "johndoe", firstName: "John",
        lastName: "Doe", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/1373242_prl159.jpg"
      },
      {
        _id: "t7cZfWIq-a", username: "amallya", firstName: "Adithya",
        lastName: "Mallya", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424977/twizzle-social/avatars/drew-hays-Kt8eGw8_S8Y-unsplash-scaled-e1664855431566.jpg_fch6nr.webp"
      },
    ],
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Tess",
    lastName: "Joesph",
    username: "josephtess",
    password: "P@ssw0rd",
    bio: "Don't hit me up simps.",
    website: "https://www.curlytales.ua",
    profileAvatar: "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
    ],
    followers: [
      {
        _id: "t7cZfWIp-q", username: "johndoe", firstName: "John",
        lastName: "Doe", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/1373242_prl159.jpg"
      },
      {
        _id: "79Gksh9otl", username: "vo_thong", firstName: "Thong",
        lastName: "Vo", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/20221023121016-635569a0de3f8345fb573ce3jpeg_kxznr8.webp"
      },
    ],
  },
  {
    _id: "Q7cZgWIp-q",
    firstName: "Frank",
    lastName: "Kirby",
    username: "chirpyfrank",
    password: "P@ssw0rd",
    bio: "You can ignore my BS.",
    website: "",
    profileAvatar: "https://res.cloudinary.com/dtaztriby/image/upload/v1688581261/twizzle-social/avatars/avatar2_g1h9jh.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: "79Gksh9otl", username: "vo_thong", firstName: "Thong",
        lastName: "Vo", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/20221023121016-635569a0de3f8345fb573ce3jpeg_kxznr8.webp"
      },
      {
        _id: "1T6Be1QpLm", username: "josephtess", firstName: "Tess",
        lastName: "Joesph", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp"
      },
    ],
    followers: [

    ],
  },
  {
    _id: "abcZgWIp6q",
    firstName: "Mellis",
    lastName: "Carpenter",
    username: "mellis123",
    password: "P@ssw0rd",
    bio: "Hustling. Focused on goals.",
    website: "https://www.mypencils.eu",
    profileAvatar: "https://res.cloudinary.com/dtaztriby/image/upload/v1688581261/twizzle-social/avatars/avatar4_fdepbs.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: "t7cZfWIq-a", username: "amallya", firstName: "Adithya",
        lastName: "Mallya", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424977/twizzle-social/avatars/drew-hays-Kt8eGw8_S8Y-unsplash-scaled-e1664855431566.jpg_fch6nr.webp"
      },
      {
        _id: "1T6Be1QpLm", username: "josephtess", firstName: "Tess",
        lastName: "Joesph", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp"
      },
    ],
    followers: [
      {
        _id: "t7cZfWIq-a", username: "amallya", firstName: "Adithya",
        lastName: "Mallya", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424977/twizzle-social/avatars/drew-hays-Kt8eGw8_S8Y-unsplash-scaled-e1664855431566.jpg_fch6nr.webp"
      },
    ],
  },
  {
    _id: "2bcZgqIp9q",
    firstName: "Sagar",
    lastName: "Chitrapur",
    username: "sagarcasm",
    password: "P@ssw0rd",
    bio: "I made bad jokes.",
    website: "https://www.mysarcasm.in",
    profileAvatar: "https://res.cloudinary.com/dtaztriby/image/upload/v1688581261/twizzle-social/avatars/avatar4_fdepbs.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
    ],
    followers: [
      {
        _id: "t7cZfWIp-q", username: "johndoe", firstName: "John",
        lastName: "Doe", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/1373242_prl159.jpg"
      },
    ],
  },
];
