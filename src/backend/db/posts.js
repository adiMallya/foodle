import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "xhzTkUi2Nt",
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
        _id: "okzxcf",
        comment:
          "Damn! Gotta grab this soon.",
        username: "josephtess",
        firstName: "Tess",
        lastName: "Joesph",
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
        _id: "etzxcf",
        comment:
          "Wow!",
        username: "v_thong",
        firstName: "Thong",
        lastName: "Vo",
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
    _id: "3XHvLP1fg",
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
        _id: "6nImWvImxo",
        comment:
          "Nice!",
        username: "johndoe",
        firstName: "John",
        lastName: "Doe",
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
    _id: "pOX2sDQF7e",
    content:
      "Absolutely loved the food ❤️, American lamb burger must try",
    mediaURL: "https://res.cloudinary.com/dtaztriby/image/upload/v1687070273/twizzle-social/posts/images/fill-700x467_7Cformat-webp_7Cwebpquality-70_sr5htx.webp",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "fIHrB5Ny3X",
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
    firstName: "Thong",
    lastName: "Vo",
    comments: [],
    createdAt: "2022-04-20",
    updatedAt: formatDate(),
  },
  {
    _id: "wcvTY7qrM4",
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
        _id: "tUH3oPm6Rx",
        comment:
          "Nice!",
        username: "vo_thong",
        firstName: "Thong",
        lastName: "Vo",
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
        _id: "aXLkT4zR9n",
        comment:
          "Yummmmmmm.",
        username: "josephtess",
        firstName: "Tess",
        lastName: "Joesph",
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
    _id: "bER3u6SjFp",
    content:
      "Went out for dinner at Chili's Hyderabad. The taste reminds me of back home in Autralia.",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    createdAt: "2022-05-11",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "kLWR4sJg6E",
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
        _id: "mNDu3jZb2A",
        comment:
          "Cafe Madras and Koolar & Co in Matunga!",
        username: "vo_thong",
        firstName: "Thong",
        lastName: "Vo",
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
        _id: "oDEs6fWc9V",
        comment:
          `Veronica's in Bandra for your burger's, Prakash at Dadar 
          for autentic mumbai food AND Noor Mohammadi in Mohammed Ali road!`,
        username: "amallya",
        firstName: "Adithya",
        lastName: "Mallya",
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
