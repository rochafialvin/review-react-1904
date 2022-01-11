import { useSelector } from "react-redux";

export default function RecieverTwo() {
  const clients = useSelector((state) => {
    return state.lockerA.clients;
  });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "cornsilk",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Reciever Two</h1>
      {clients.map((client) => (
        <h3>{client}</h3>
      ))}
    </div>
  );
}
