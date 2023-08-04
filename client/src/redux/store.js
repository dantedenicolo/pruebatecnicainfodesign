import { configureStore,createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  initialDate: '',
  finalDate: '',
  tramos: [],
  tramosdia: [],
  cliente: [],
  clienteDia: [],
  tramosCliente: [],

}

//async thunks

export const fetchTramos = createAsyncThunk(
  'tramos/fetchTramos',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:4000/tramos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log('Tramos from server:', responseData);

        return responseData;
      } catch (err) {
        throw rejectWithValue(err.message);
      }
  }
);
  

export const fetchTramosDia = createAsyncThunk(
  'tramosDia/fetchTramosDia',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:4000/tramos-dia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log('Tramos Dia from server:', responseData);

      return responseData;
    } catch (err) {
      throw rejectWithValue(err.message);
    }
  }
);
  
export const fetchCliente = createAsyncThunk(
  'cliente/fetchClient',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:4000/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log('Cliente from server:', responseData);

      return responseData;
    } catch (err) {
      throw rejectWithValue(err.message);
    }
  }
);


export const fetchClienteDia = createAsyncThunk(
  'clienteDia/fetchClienteDia',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:4000/cliente-dia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log('Cliente Dia from server:', responseData);

      return responseData;
    } catch (err) {
      throw rejectWithValue(err.message);
    }
  }
);

export const fetchTramosCliente = createAsyncThunk(
  'tramosCliente/fetchTramosCliente',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:4000/tramos-cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log('Tramos Cliente from server:', responseData);

      return responseData;
    } catch (err) {
      throw rejectWithValue(err.message);
    }
  }
);


  //Create a slice for:
const dateSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    setInitialDate:(state, action)=> {
      state.initialDate = action.payload;
    },
    setFinalDate:(state, action)=> {
      state.finalDate = action.payload;
    },
  },
});

const tramosSlice = createSlice({
  name: 'tramos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTramos.fulfilled, (state, action) => {
      state.tramos = action.payload;
    });
  },
});

const tramosDiaSlice = createSlice({
  name: 'tramosDia',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTramosDia.fulfilled, (state, action) => {
      state.tramosdia = action.payload;
    });
  },
});


const clienteSlice = createSlice({
  name: 'cliente',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCliente.fulfilled, (state, action) => {
      state.cliente = action.payload;
    });
  },
});

const clienteDiaSlice = createSlice({
  name: 'clienteDia',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchClienteDia.fulfilled, (state, action) => {
      state.clienteDia = action.payload;
    });
  },
});

const tramosClienteSlice = createSlice({
  name: 'tramosCliente',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTramosCliente.fulfilled, (state, action) => {
      state.tramosCliente = action.payload;
    });
  },
});




//Add actions to the store:
const store = configureStore({
  reducer: {
    dates: dateSlice.reducer,
    tramos: tramosSlice.reducer,
    tramosdia: tramosDiaSlice.reducer,
    cliente: clienteSlice.reducer,
    clienteDia: clienteDiaSlice.reducer,
    tramosCliente: tramosClienteSlice.reducer,
    // Add the generated reducer as a specific top-level slice
  }
});


//Selectors
export const selectTramos = state => state.tramos.tramos;
export const selectTramosDia = state => state.tramosdia.tramosdia;
export const selectCliente = state => state.cliente.cliente;
export const selectClienteDia = state => state.clienteDia.clienteDia;
export const selectTramosCliente = state => state.tramosCliente.tramosCliente;
export const selectInitialDate = state => state.dates.initialDate;
export const selectFinalDate = state => state.dates.finalDate;




export const { setFinalDate, setInitialDate } = dateSlice.actions

export default store;
