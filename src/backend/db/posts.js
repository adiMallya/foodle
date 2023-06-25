import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "BEST WINGS in town guys!!.",
    mediaURL: "https://res.cloudinary.com/dtaztriby/image/upload/v1687070626/twizzle-social/posts/images/air-fryer-chicken-wings_web-6.jpg_kwpzib.webp",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment:
          "Damn! Gotta grab this soon.",
        username: "bubblyme",
        profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment:
          "Wow!",
        username: "v_thong",
        profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/20221023121016-635569a0de3f8345fb573ce3jpeg_kxznr8.webp",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      `If you are a south indian food lover, this is a place you can go for.
      It is easy to spot from the road because of the heavy crowd. The food 
      is good in quantity and quality also. I tried their Podi masala dosa and kesari.`,
    mediaURL: "https://res.cloudinary.com/dtaztriby/image/upload/v1687070496/twizzle-social/posts/images/DzmBXEDun4xdC-32X5u8WLEpyIns9rIxndrLkY_ylBM_f2td86.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "josephtess",
    firstName: "Tess",
    lastName: "Joseph",
    createdAt: "2022-05-11",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment:
          "Nice!",
        username: "johndoe",
        profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/1373242_prl159.jpg",
        createdAt: "2022-05-11",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Absolutely loved the food ❤️, American lamb burger must try",
    mediaURL: "https://res.cloudinary.com/dtaztriby/image/upload/v1687070273/twizzle-social/posts/images/fill-700x467_7Cformat-webp_7Cwebpquality-70_sr5htx.webp",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          profileAvatar:
            "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/1373242_prl159.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "vo_thong",
    fullName: "Thong Vo",
    comments: [],
    createdAt: "2022-04-20",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Shah Ghouse guyyyys! Gotta live life to have this biriyani!",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "amallya",
    firstName: "Adithya",
    lastName: "Mallya",
    createdAt: "2022-05-05",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment:
          "Nice!",
        username: "vo_thong",
        profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/20221023121016-635569a0de3f8345fb573ce3jpeg_kxznr8.webp",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment:
          "Yummmmmmm.",
        username: "bubblyme",
        profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686425022/twizzle-social/avatars/fill-364x243_7Cformat-webp_7Cwebpquality-70_cg96lr.webp",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Went out for dinner at Chili's Hyderabad. The taste reminds me of back home in Autralia.",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    postImage: null,
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    createdAt: "2022-05-11",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Guys I am in Mumbai! Please drop your suggestions",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "josephtess",
    firstName: "Tess",
    lastName: "Joesph",
    createdAt: "2022-05-09",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment:
          "Cafe Madras and Koolar & Co in Matunga!",
        username: "vo_thong",
        profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424976/twizzle-social/avatars/20221023121016-635569a0de3f8345fb573ce3jpeg_kxznr8.webp",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment:
          `Veronica's in Bandra for your burger's, Prakash at Dadar 
          for autentic mumbai food AND Noor Mohammadi in Mohammed Ali road!`,
        username: "amallya",
        profileAvatar:
          "https://res.cloudinary.com/dtaztriby/image/upload/v1686424977/twizzle-social/avatars/drew-hays-Kt8eGw8_S8Y-unsplash-scaled-e1664855431566.jpg_fch6nr.webp",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
