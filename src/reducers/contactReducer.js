const initialState = {
    contacts: [
        {
            name: "Carl Max",
            phone: "0244334455",
            location: "accra",
            id: "444"
        },
        {
            name: "Bob Fox",
            phone: "0244998877",
            location: "kumasi",
            id: "555"
        },
        {
            name: "Sam Wood",
            phone: "0244885533",
            location: "tamale",
            id: "666"
        },
    ]
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        const newContact = {
          name: action.payload.name,
          phone: action.payload.phone,
          location: action.payload.location,
          id: action.payload.id
        };
  
        return {
          ...state,
          contacts: [...state.contacts, newContact]
        };
  
      default:
        return state;
    }
  };
  
  export default contactReducer;
  