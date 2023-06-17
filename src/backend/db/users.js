import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adithya",
    lastName: "Mallya",
    username: "amallya",
    password: "P@ssw0rd",
    bio: "Busy at work.",
    website: "https://www.adim@llya.com",
    profileAvatar: "https://res.cloudinary.com/dtaztriby/image/upload/v1686424977/twizzle-social/avatars/drew-hays-Kt8eGw8_S8Y-unsplash-scaled-e1664855431566.jpg_fch6nr.webp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(), username: "johndoe", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/1373242_prl159.jpg"
      }
    ],
    followers: [
      {
        _id: uuid(), username: "johndoe", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/1373242_prl159.jpg"
      },
      {
        _id: uuid(), username: "bubblyme", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp"
      },
      {
        _id: uuid(), username: "vo_thong", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/20221023121016-635569a0de3f8345fb573ce3jpeg_kxznr8.webp"
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "P@ssw0rd",
    bio: "Living life on strings.",
    website: "https://www.doejohn.dev",
    profileAvatar: "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/1373242_prl159.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(), username: "vo_thong", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/20221023121016-635569a0de3f8345fb573ce3jpeg_kxznr8.webp"
      },
      {
        _id: uuid(), username: "bubblyme", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp"
      },
    ],
    followers: [
      {
        _id: uuid(), username: "bubblyme", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp"
      },
      {
        _id: uuid(), username: "amallya", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424977/twizzle-social/avatars/drew-hays-Kt8eGw8_S8Y-unsplash-scaled-e1664855431566.jpg_fch6nr.webp"
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Thong",
    lastName: "Vo",
    username: "vthong",
    password: "P@ssw0rd",
    bio: "Hustling. Diving. Running.",
    website: "https://www.thongvo.me",
    profileAvatar: "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/20221023121016-635569a0de3f8345fb573ce3jpeg_kxznr8.webp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(), username: "bubblyme", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp"
      }
    ],
    followers: [
      {
        _id: uuid(), username: "johndoe", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/1373242_prl159.jpg"
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Tess",
    lastName: "Joesph",
    username: "josephtess",
    password: "P@ssw0rd",
    bio: "Don't hit me up simps.",
    website: "https://www.curlytales.ua",
    profileAvatar: "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {

      }
    ],
    followers: [
      {
        _id: uuid(), username: "johndoe", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/1373242_prl159.jpg"
      },
      {
        _id: uuid(), username: "amallya", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424977/twizzle-social/avatars/drew-hays-Kt8eGw8_S8Y-unsplash-scaled-e1664855431566.jpg_fch6nr.webp"
      },
      {
        _id: uuid(), username: "vo_thong", profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/20221023121016-635569a0de3f8345fb573ce3jpeg_kxznr8.webp"
      },
    ],
  },
];
