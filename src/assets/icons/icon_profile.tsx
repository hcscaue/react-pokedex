type PropsType = {
  color?: string;
};

export const ProfileIcon = ({ color = "EF4036" }: PropsType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4214 1.74535C15.2988 0.619818 13.7307 0 12 0C10.26 0 8.68682 0.616068 7.56935 1.73463C6.43977 2.86552 5.8894 4.40247 6.01863 6.06211C6.27477 9.33637 8.95797 11.9999 12 11.9999C15.042 11.9999 17.7206 9.33691 17.9808 6.06318C18.1118 4.41855 17.5579 2.8848 16.4214 1.74535ZM22.1536 23.9999H1.84643C1.58063 24.0031 1.3174 23.9512 1.0759 23.8481C0.834389 23.7449 0.62068 23.5931 0.450318 23.4036C0.0753279 22.9874 -0.0758218 22.419 0.0360982 21.8442C0.523008 19.336 2.04258 17.229 4.43098 15.7499C6.55284 14.4369 9.24065 13.7142 12 13.7142C14.7593 13.7142 17.4472 14.4374 19.569 15.7499C21.9574 17.2285 23.477 19.3354 23.9639 21.8436C24.0758 22.4184 23.9247 22.9868 23.5497 23.4031C23.3794 23.5927 23.1657 23.7446 22.9242 23.8478C22.6827 23.9511 22.4194 24.003 22.1536 23.9999Z"
        fill={`#${color}`}
      />
    </svg>
  );
};
