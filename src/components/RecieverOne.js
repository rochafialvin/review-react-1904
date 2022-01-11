import { useSelector } from "react-redux";

export default function RecieverOne() {
  const money = useSelector((state) => {
    return state.lockerA.money;
  });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "antiquewhite",
        borderRight: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Reciever One</h1>
      <h2>Amount of money : {money}</h2>
    </div>
  );
}
