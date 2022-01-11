const locker = {
  money: 0,
  clients: [],
};

// reducer akan selalu me-return sebuah data (object), yang kemudian akan di simpan di state (locker)
// reducer tidak boleh me-return undefined, untuk mengindari hal ini, kita membuat nilai default untuk parameter state beruba object yang kita beri nama init
// init adalah merupakan bentuk data yang akan kita simpan pada state (locker)
export default function reducerA(state = locker, action) {
  // action :{type: 'saving', payload: { cash: 100 }}
  // action :{type: 'withdraw', payload: { amount: 100 }}
  // action :{type: 'register', payload: { name: 'Uzui Tengen' }}

  switch (action.type) {
    case "saving":
      // Menyimpan uang
      const finalMoney = state.money + action.payload.cash;
      return { ...state, money: finalMoney };

    case "withdraw":
      // Tarik tunai
      const resultMoney = state.money - action.payload.amount;
      return { ...state, money: resultMoney };

    case "register":
      // Daftar menjadi nasabah
      state.clients.push(action.payload.name);
      const finalClients = [...state.clients];
      return { ...state, clients: finalClients };

    default:
      return state;
  }
}
