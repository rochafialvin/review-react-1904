import { useDispatch } from "react-redux";

export default function Sender() {
  const dispatch = useDispatch();

  const onBtnSavingClick = () => {
    const action = { type: "saving", payload: { cash: 100 } };
    dispatch(action);
  };
  const onBtnWithdrawClick = () => {
    const action = { type: "withdraw", payload: { amount: 50 } };
    dispatch(action);
  };
  const onBtnRegisterClick = () => {
    const action = { type: "register", payload: { name: "Uzui Tengen" } };
    dispatch(action);
  };

  return (
    <div
      style={{
        backgroundColor: "cadetblue",
        borderBottom: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <h1>Sender One</h1>
      <button onClick={onBtnSavingClick}>Saving : 100</button>
      <button onClick={onBtnWithdrawClick}>Widthdraw : 50</button>
      <button onClick={onBtnRegisterClick}>Register : Uzui Tengen</button>
    </div>
  );
}
