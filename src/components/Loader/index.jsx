import * as S from "./styles";

const Loader = ({ fullScreen }) => {
  return (
    <>
      {fullScreen ? (
        <S.LoaderWrapper>
          <svg
            xmlnsXlink="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            style={{
              margin: "auto",
              // background: "rgb(241, 242, 243)",
              display: "block",
            }}
            width="149px"
            height="149px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <path
              fill="none"
              stroke="#fcd34d"
              strokeWidth="8"
              strokeDasharray="25.658892822265624 25.658892822265624"
              d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
              strokeLinecap="round"
              style="transform:scale(0.8);transform-origin:50px 50px"
            >
              <animate
                attributeName="stroke-dashoffset"
                repeatCount="indefinite"
                dur="1.3888888888888888s"
                keyTimes="0;1"
                values="0;256.58892822265625"
              ></animate>
            </path>
          </svg>
        </S.LoaderWrapper>
      ) : (
        <svg
          xmlnsXlink="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
          style={{
            margin: "auto",
            // background: "rgb(241, 242, 243)",
            display: "block",
          }}
          width="149px"
          height="149px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <path
            fill="none"
            stroke="#fcd34d"
            strokeWidth="8"
            strokeDasharray="25.658892822265624 25.658892822265624"
            d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
            strokeLinecap="round"
            style="transform:scale(0.8);transform-origin:50px 50px"
          >
            <animate
              attributeName="stroke-dashoffset"
              repeatCount="indefinite"
              dur="1.3888888888888888s"
              keyTimes="0;1"
              values="0;256.58892822265625"
            ></animate>
          </path>
        </svg>
      )}
    </>
  );
};

export { Loader };
