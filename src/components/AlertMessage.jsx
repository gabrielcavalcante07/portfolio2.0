export const AlertMessage = ({type, text}) => {
  return (
    <div className="fixed">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* <Message severity={typeAlert} text={textAlert} /> */}
        <Message
          severity={type}
          text={text}
          className="bg-green-500"
        />
      </div>
    </div>
  );
};
