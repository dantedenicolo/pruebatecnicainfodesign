import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from '@tremor/react';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCliente,
  fetchClienteDia,
  fetchTramos,
  fetchTramosDia,
  fetchTramosCliente,
  selectCliente,
  selectClienteDia,
  selectTramos,
  selectTramosDia,
  selectTramosCliente,
  selectInitialDate,
  selectFinalDate,
} from '../../redux/store';


import TramosDiaTable from '../TableroComponent/TablaTramoDia'
import ClienteDiaTable from '../TableroComponent/TablaClienteDia';
import GraficoTramosDia from '../TableroComponent/GrafTramosDia';
import KpiCardMaxMinTramoDia from '../TableroComponent/KpiCardMaxMinTramoDia';
import KpiCardMaxMinClienteDia from '../TableroComponent/KpiCardMaxMinClienteDia';
import DonutChartTramos from '../TableroComponent/DonutCharTramos';
import BarlistCliente from '../TableroComponent/BarListCliente';



const Dashboard = () => {

const dispatch = useDispatch();
const tramos = useSelector(selectTramos);
const tramosDia = useSelector(selectTramosDia);
const cliente = useSelector(selectCliente);
const clienteDia = useSelector(selectClienteDia);
const tramosCliente = useSelector(selectTramosCliente);
const fechainicial = useSelector(selectInitialDate)
const fechafinal = useSelector(selectFinalDate)



  useEffect(() => {
  if(fechafinal && fechainicial) {
  Promise.all([
    dispatch(fetchTramos({ fechainicial, fechafinal })),
    dispatch(fetchTramosDia({ fechainicial, fechafinal })),
    dispatch(fetchCliente({ fechainicial, fechafinal })),
    dispatch(fetchClienteDia({ fechainicial, fechafinal })),
    dispatch(fetchTramosCliente({ fechainicial, fechafinal })),
  ]).catch((err) => {
    console.error('Error fetching data: ', err);
  });
  }
}, [dispatch, fechainicial, fechafinal]);


  return (
    <>
      <main className="px-4 py-4 w-full">
        <Title
          className="self-center uppercase text-5xl font-bold whitespace-nowrap dark:text-white"
          style={{ width: '100%' }}
        >
          Analisis de Datos
        </Title>

        <TabGroup className="mt-6 max-w-full">
          <TabList className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-white">
            <Tab className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-gray-700">Consumos</Tab>
            <Tab className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-gray-700">Tabla Tramo/Día</Tab>
            <Tab className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-gray-700">Tabla Cliente/Día</Tab>
            <Tab className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-gray-700">Pedidas por Cliente</Tab>
          </TabList>
          <TabPanels >
            <TabPanel>
              <div className="mt-4">
                <Card>
                  <DonutChartTramos tramosData={tramos} />
                  <div className="mt-2" />
                </Card>
              </div>
              <div className="mt-6">
                <Card>
                  <GraficoTramosDia tramosDiaData={tramosDia} />
                  <div className="mt-4" />
                </Card>
              </div>
              <div className="mt-6">
                <Card>
                  <KpiCardMaxMinTramoDia tramosDiaData={tramosDia} />
                  <div className="mt-4" />
                </Card>
              </div>
              <div className="mt-6">
                <Card>
                  <KpiCardMaxMinClienteDia clienteDiaData={clienteDia} />
                  <div className="mt-4" />
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <TramosDiaTable tramosDiaData={tramosDia} />
                  <div className="mt-6" />
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <ClienteDiaTable clienteDiaData={clienteDia} />
                  <div className="mt-6" />
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <BarlistCliente tramosClienteData={tramosCliente} />
                  <div className="mt-6" />
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>
    </>
  );
};

export default Dashboard;
